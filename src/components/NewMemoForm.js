import React from "react";
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";
import {auth} from './../firebase';
import { serverTimestamp } from "firebase/firestore";


function NewMemoForm(props) {

   function handleNewMemoFormSubmission(event) {
        event.preventDefault();

        props.onAddingMemo({
            name: auth.currentUser.email,
            title: event.target.title.value,
            memoText: event.target.memoText.value,
            date: event.target.date.value,
            rate: event.target.rate.value,
            emotion: event.target.emotion.value,
            timeCreated: serverTimestamp()
        });

    }
    return (
<React.Fragment>
   <ReusableForm
   handleFormSubmission={handleNewMemoFormSubmission}
   btnText="Save Memo"
   />
</React.Fragment>
    );
}

NewMemoForm.propTypes = {
    onAddingMemo: PropTypes.func
};
 

export default NewMemoForm;