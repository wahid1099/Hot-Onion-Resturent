import { getAuth, createUserWithEmailAndPassword,sendEmailVerification} from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const UseFirebase = () => {
    const [email, setEmail] = useState({});
    const [password, setPassword] = useState('');
    const [error,setError]=useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

const registerNewUser=()=>{
    createUserWithEmailAndPassword();
}
    const handleRegistration=(e)=>{
        e.preventDefault();
        if(password.length<6){
            setError('Password Must be at least 6 charecters long');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError('Password must contain two upper case');
            return;
        }if(isLogin){

        }
        else{
            registernewuser(email,password);
        }



    }
    //gettting emmail and setting it
    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
        console.log(e.target.value);

    }
    const handlepassChange=(e)=>{
        setPassword(e.target.value);
        console.log(e.target.value);

    }
//registering new user
    const registernewuser=(email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                verifyEmail();
                setError('');

                // ...
            })
            .catch((error) => {
                setError(error.message);
                console.log(error)
            });


    }


    const verifyEmail=()=>{
        //send verifacation
        sendEmailVerification(auth.currentUser)
            .then((result) => {
                console.log(result);

                // Email verification sent!
                // ...
            });
    }


    return {
        verifyEmail,
        registerNewUser,
        handleRegistration,
        handlepassChange,
        error,
        handleEmailChange
    }
}

export default UseFirebase;
