import React from "react";
import { auth } from "firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignIn() {

    function doSignUp(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

        })
        .catch((error) => {

        });
    }
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}

export default SignIn;
