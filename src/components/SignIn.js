import React, {useState} from "react";
import { auth } from "./../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { Nav, Navbar, Container, Form, Row, Col, Button } from "react-bootstrap";
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
            setSignUpSuccess(`There was an error signing up: ${error.message}`)
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
         setSignInSuccess(`There was an error signing in: ${error.message}`)
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
           <h5><em>{signUpSuccess}</em></h5>
            <Form onSubmit={doSignUp}>
                <Row>
                    <Col>
                    <Form.Group className="mb-3">
                <Form.Control 
                name="email"
                type="text"
                placeholder="Your email"/>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3">
                <Form.Control 
                name="password"
                type="password"
                placeholder="Your password"/>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3">
                <Form.Control 
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"/>
                </Form.Group>
                </Col>
                </Row>
                <Button type="submit" variant="outline-dark">Sign Up!</Button>
            </Form>

            <h2 className="mt-3">Sign In</h2>
            <h5><em>{signInSuccess}</em></h5>
            <Form onSubmit={doSignIn}>
                <Row>
                    <Col sm={4}>
                    <Form.Group className="mb-3">
                 <Form.Control 
                name="signInEmail"
                type="text"
                placeholder="Your email"/>
                </Form.Group>
                </Col>
                <Col sm={4}>
                <Form.Group className="mb-3">
                <Form.Control 
                name="signInPassword"
                type="password"
                placeholder="Your password"/>
                </Form.Group>
                </Col>
                </Row>
                <Button type="submit" variant="outline-dark">Sign In!</Button>
            </Form>

        </React.Fragment>
    );
}

export default SignIn;
