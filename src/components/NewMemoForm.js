import React from "react";
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";

function NewMemoForm(props) {

   function handleNewMemoFormSubmission(event) {
        event.preventDefault();

        props.onAddingMemo({
            name: event.target.name.value,
            memoText: event.target.memoText.value,
            date: event.target.date.value,
            rate: event.target.rate.value,
            emotion: event.target.emotion.value
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