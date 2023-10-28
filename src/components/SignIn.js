import React, {useState} from "react";
import { auth } from "./../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { Nav, Navbar, Container } from "react-bootstrap";
import moonImg from './../img/moon.png';

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
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Nav>
    <Navbar.Brand><img src={moonImg} alt='moon'/></Navbar.Brand>
     <Nav.Link href="/"><h2>Memory Lane</h2></Nav.Link>           
   </Nav>
   <Nav className="justify-content-end">
   <Navbar.Text><h4><em>  ...Follow your dreams!</em></h4></Navbar.Text>
   </Nav>
   </Container>
   </Navbar>
             <h2  className="mt-3">Sign Up</h2>
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

            <h2 className="mt-3">Sign In</h2>
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

        </React.Fragment>
    );
}

export default SignIn;
