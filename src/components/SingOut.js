import React, {useState} from "react";
import {auth} from './../firebase';
import { signOut } from "firebase/auth";
import { Nav, Navbar, Container } from "react-bootstrap";
import moonImg from './../img/moon.png';

function SignOut() {
    const [signOutSuccess, setSignOutSuccess] = useState(null);
    function doSignOut() {
    signOut(auth)
    .then(function ()  {
        setSignOutSuccess(`You've signed out! See you:))`)
    })
    .catch(function(error) {
        setSignOutSuccess('There were some troubles when sign out.')
    })
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
   <h2 className="mt-3">Sign Out</h2>
  <h4>{signOutSuccess}</h4> 
<button onClick={doSignOut}>Sign Out!</button>
</React.Fragment>);
}

export default SignOut;