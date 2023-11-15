import React, {useState} from "react";
import {auth} from '../firebase';
import { signOut } from "firebase/auth";
import { Button} from "react-bootstrap";
import PropTypes from 'prop-types';


function SignOut(props) {
    const [signOutSuccess, setSignOutSuccess] = useState(null);
    function doSignOut() {
    signOut(auth)
    .then(function ()  {
        setSignOutSuccess(`You've signed out! See you:))`);
        props.onSignOut();
    })
    .catch(function(error) {
        setSignOutSuccess('There were some troubles when sign out.')
    })
    }
    

return (
<React.Fragment>
   <h2 className="mt-3">Sign Out</h2>
  <h5 className="mb-3"><em>{signOutSuccess}</em></h5> 
<Button onClick={doSignOut} variant="outline-dark"><strong>Sign Out!</strong></Button>
</React.Fragment>);
}

SignOut.propTypes = {
    onSignOut: PropTypes.func
}

export default SignOut;