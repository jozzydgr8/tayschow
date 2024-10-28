import { signInWithPopup } from "firebase/auth";
import { addDoc } from "firebase/firestore";
import { auth, provider } from "../App";
import { UseContextAuth } from "../context/UseContextAuth";
import { userRef } from "../App";

export const SignUser = ()=>{
const {dispatch} = UseContextAuth();
    const handleClick = ()=>{
        signInWithPopup(auth, provider).then(data=>{
            const {user} =data;
            dispatch({type:'signUser', payload:user});
            addDoc(userRef, {
                email:user.email,
                userID:user.uid,
                phone:user.phoneNumber,
                name:user.displayName,

            })
        }).catch(error=>{
            console.error(error)
        })
    }
    return(
        <section>
            <div className="container-fluid">
                <button onClick={handleClick} style={{marginTop:'100px'}}>sign in with gmail</button>
            </div>
        </section>
    )
}