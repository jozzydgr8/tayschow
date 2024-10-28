import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { addDoc } from "firebase/firestore";
import { auth, provider } from "../App";
import { UseContextAuth } from "../context/UseContextAuth";
import { userRef } from "../App";
import {Input, Form} from 'antd'

export const SignUser = ()=>{
const {dispatch} = UseContextAuth();
    const handleClick = ()=>{
        signInWithRedirect(auth, provider).then(data=>{
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
        <section style={{marginTop:'80px'}}>
            <div className="container-fluid">
                <Form>
                    <Input />
                    <Input.Password/>
                </Form>
                <button onClick={handleClick} style={{marginTop:'100px'}}>sign in with gmail</button>
            </div>
        </section>
    )
}