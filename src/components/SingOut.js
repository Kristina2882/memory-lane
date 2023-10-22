import React, {useState} from "react";
import {auth} from './../firebase';
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

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
{signOutSuccess}
<br/>
<button onClick={doSignOut}>Sign Out!</button>
<Link to ='/'><h2>Home</h2></Link>
</React.Fragment>);
}

export default SignOut;