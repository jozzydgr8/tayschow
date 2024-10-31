import { useState } from "react";
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword,
        fetchSignInMethodsForEmail, linkWithCredential,
        GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
import { addDoc, getDoc, doc, setDoc, getDocs, query, where } from "firebase/firestore";
import { auth, provider, userRef } from "../App";
import { UseContextAuth } from "../context/UseContextAuth";
import { message } from 'antd';
import { GoogleOutlined, LeftOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import tayLogo from '../assets/tayLogo.png';

export const SignUser = () => {
    const { dispatch } = UseContextAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [viewPassword, setViewPassword] = useState(false);
    const navigate = useNavigate();

    // Validate email format with regex
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = async () => {
        if (!email || !validateEmail(email)) {
            message.warning('Please enter a valid email.');
            return;
        }
        if(validateEmail){
            setEmailValid(true)
        }
        if (!password) {
            return;
        }


        try {
            const emailQuery = query(userRef, where("email", "==", email));
            const querySnapshot = await getDocs(emailQuery);

            let user;
            if (querySnapshot.empty) {
                const { user: newUser } = await createUserWithEmailAndPassword(auth, email, password);
                user = newUser;
                await addDoc(userRef, { email: user.email, userID: user.uid });
            } else {
                const { user: existingUser } = await signInWithEmailAndPassword(auth, email, password);
                user = existingUser;
            }

            dispatch({ type: 'signUser', payload: user });
        } catch (error) {
            console.error("Authentication error:", error.message);
            message.error('Failed to authenticate. Please try again.');
        }
    };

   

const handleGoogleSignIn = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        
        // Reference to the user's document
        const userDocRef = doc(userRef, user.uid);
        const userDocSnap = await getDoc(userDocRef);

        // Check if the user exists in Firestore
        if (!userDocSnap.exists()) {
            await setDoc(userDocRef, {
                email: user.email,
                userID: user.uid,
                phone: user.phoneNumber,
                name: user.displayName,
                provider: "Google",
            });
        }

        dispatch({ type: 'signUser', payload: user });

    } catch (error) {
        if (error.code === 'auth/account-exists-with-different-credential') {
            // Handle account linking
            const existingEmail = error.customData.email;
            const googleCredential = GoogleAuthProvider.credentialFromError(error);

            try {
                // Fetch sign-in methods for the existing email
                const signInMethods = await fetchSignInMethodsForEmail(auth, existingEmail);

                if (signInMethods.includes(EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)) {
                    // If the email is registered with email/password, sign in with email/password first
                    const password = prompt("Please enter your password to link Google to this account:");
                    const emailCredential = EmailAuthProvider.credential(existingEmail, password);

                    // Sign in with email/password credential
                    const userCredential = await signInWithEmailAndPassword(auth, existingEmail, password);

                    // Link Google account to the existing email/password account
                    await linkWithCredential(userCredential.user, googleCredential);
                    message.success("Google account linked successfully!");

                    // Dispatch the updated user to your app’s store
                    dispatch({ type: 'signUser', payload: userCredential.user });
                }
            } catch (linkError) {
                console.error("Error linking accounts:", linkError.message);
                message.error("Failed to link Google account. Please try again.");
            }
        } else {
            console.error("Error during Google sign-in:", error.message);
            message.error("Failed to sign in with Google. Please try again.");
        }
    }
};


    return (
        <section id="sign-user">
            <div className="container-fluid">
                <button className="return" onClick={() => navigate(-1)}>
                    <LeftOutlined />
                </button>

                <div className="sign-in-content">
                    <img src={tayLogo} alt="logo" />
                    <h3>Welcome to tastyChow</h3>
                    <p>
                        Type in your email address or phone number to login or create a tastyChow account.
                    </p>
                    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                        {!emailValid ? (
                            <input
                                placeholder="Email or Mobile Number*"
                                value={email}
                                onChange={(e) => {
                                    const newEmail = e.target.value;
                                    setEmail(newEmail);
                                    
                                }}
                                required
                            />
                        ) : (
                            <>
                            <span style={{cursor:'pointer'}} onClick={()=>setEmailValid(false)}>see email</span>
                            
                                <input
                                    placeholder="Password*"
                                    type={viewPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <span onClick={() => setViewPassword(!viewPassword)} style={{ cursor: 'pointer' }}>
                                    {viewPassword ? 'Hide password' : 'View password'}
                                </span>
                            </>
                        )}
                        <button type="submit">Submit</button>
                    </form>
                    <p>
                        By continuing, you agree to tastyChow's <Link to="/terms">Terms and Conditions</Link>.
                    </p>
                    <button className="googlebtn" onClick={handleGoogleSignIn}>
                        <GoogleOutlined /> Log in with Google
                    </button>
                    <p>For further support, <Link to="/contact">Contact Us</Link>.</p>
                </div>
            </div>
        </section>
    );
};
