import React, {useState} from 'react';

import {BiMessageSquareError} from 'react-icons/bi';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {auth} from 'libs/firebase';
import {Label, Input} from 'ui/forms';
import {SubmitButton} from 'ui/buttons';
import { LonginPageStyles, FormControl } from './styles';
import { useNavigate } from 'react-router-dom';


function LoginPage (props){
    console.log(auth);
    //useState() return stateful value, function to change the sateful value
    //start with state declarations
    const navigator = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const notify = (error) => toast.error(error.code,{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        icon:<BiMessageSquareError />
  
    });

    function onHandleSignIn(evt) {
        evt.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(userCrediental=>{
            // move dashboard page
            // useNavigate() react rotuer
            navigator('dashboard');
        })
        .catch(error=>{
            notify(error);
        })
        
    }

    return(

        <LonginPageStyles>
            <ToastContainer />
            <header>
                <h1>Welcome Please Login In</h1>
            </header>

            <form onSubmit={onHandleSignIn}>
                <FormControl>
                    <Label>Email</Label>
                    <Input type="text" placeholder="janedoe@gmail.com" onChange={(evt)=> setEmail(evt.target.value)} />
                </FormControl>
                <FormControl>
                    <Label>Password</Label>
                    <Input type="text" placeholder="account password" onChange={(evt)=> setPassword(evt.target.value)} />
                </FormControl>
                <FormControl>
                    <SubmitButton padding="0.5rem 0" margin="1rem 0 0 0">Sign Into The Dashboard</SubmitButton>
                </FormControl>
            </form>
            

        </LonginPageStyles>

    )

}

export default LoginPage