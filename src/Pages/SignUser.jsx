import { signInWithPopup, signInWithRedirect, getRedirectResult, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc } from "firebase/firestore";
import { auth, provider } from "../App";
import { UseContextAuth } from "../context/UseContextAuth";
import { userRef } from "../App";
import {Input, Form} from 'antd'
import { useEffect, useState } from "react";
import tayLogo from '../assets/tayLogo.png';
import { GoogleOutlined, LeftOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

export const SignUser = ()=>{
const {dispatch} = UseContextAuth();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [view , setView] = useState(false);
const navigate = useNavigate();


    const handleSubmit =  async(e)=>{
        e.preventDefault();
        try{
            const result = await createUserWithEmailAndPassword(auth, email, password);
            // const {user} = result.user;
            dispatch({type:'signUser', payload:result.user});
            await addDoc(userRef,{
                email:result.user.email,
                userID:result.user.uid,
            })
        }catch(error){
            console.error(error)
        }
    }

    const handleClick = async ()=>{
        try{
             const result = await signInWithPopup(auth, provider);
            //  const {user} = await result.user;
             dispatch({type:'signUser', payload:result.user});
             await addDoc(userRef,{

                email:result.user.email,
                userID:result.user.uid,
                phone:result.user.phoneNumber,
                name:result.user.displayName,
             })
        }catch(error){
            console.error(error)
        }
    }
        
    return(
        <section id="sign-user">
            <div className="container-fluid">
                <button className="return" onClick={() => navigate(-1)}>
                    <LeftOutlined/>
                </button>

                <div style={{display:"flex",flexDirection:"column",
                    alignItems:'center', justifyContent:"center", gap:"15px"
                }}>
                    <img src={tayLogo} alt="logo" />
                    <h3>Welcome to tastyChow</h3>
                    <p>Type in your email address or phone phone phoneNumber
                        to login or create a tastyChow account
                    </p>
                    <form >
                    <input placeholder="Email or Mobile Number*" onChange={e=>setEmail(e.target.value)} />
                    <input placeholder="password*" type={!view ? 'password':'text'} onChange={e=>setPassword(e.target.value)}/>
                    <span onClick={()=>setView(!view)}>{!view?'view password':'hide password'}</span>
                    <button onClick={handleSubmit} type="submit">Continue</button>
                </form>
                <br/>
                By contiuing you agree to tastyChow
                <br/>
                <Link>Terms and Conditions</Link>
                <br/>
                <button className="googlebtn" onClick={handleClick} style={{marginTop:'100px'}}><GoogleOutlined/> Log in with Google</button>
                <br/>
                For futher support, <Link>Contact Us</Link>
                </div>
                
                
            </div>
        </section>
    )
}