import React, {useState} from "react";
import { auth } from "./../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { Link } from "react-router-dom";

function SignIn() {

    const [signUpSuccess, setSignUpSuccess] = useState(null);
    const [signInSuccess, setSignInSuccess] = useState(null);

    function doSignUp(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const passwordConfirmed = event.target.confirmPassword.value;

        if (password === passwordConfirmed) {

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
         setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}!`)
        })
        .catch((error) => {
            setSignUpSuccess(`There was an error signing up: ${error.message}!`)
        });
    }
    else {
        setSignUpSuccess(`Passwords don't match!`)
    }
}

    function doSignIn(event) {
        event.preventDefault();
        const email = event.target.signInEmail.value;
        const password = event.target.signInPassword.value;
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setSignInSuccess(`You've successfully signed in, ${userCredential.user.email}!`)
        })
        .catch((error) => {
         setSignInSuccess(`There was an error signing in: ${error.message}!`)
        });

    }
    return (
        <React.Fragment>
             <h2>Sign Up</h2>
            {signUpSuccess}
            <form onSubmit={doSignUp}>
                <input
                name="email"
                type="text"
                placeholder="Your email"/>
                <input
                name="password"
                type="password"
                placeholder="Your password"/>
                <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"/>
                <button type="submit">Sign Up!</button>
            </form>

            <h2>Sign In</h2>
            {signInSuccess}
            <form onSubmit={doSignIn}>
                <input
                name="signInEmail"
                type="text"
                placeholder="Your email"/>
                <input
                name="signInPassword"
                type="password"
                placeholder="Your password"/>
                <button type="submit">Sign In!</button>
            </form>

            <Link to ='/'><h2>Home</h2></Link>

        </React.Fragment>
    );
}

export default SignIn;
