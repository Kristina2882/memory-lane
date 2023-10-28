import React from "react";
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";

function EditMemoForm(props) {
    const {memo} = props;

    function handleEditFormSubmission(event) {
        event.preventDefault();
        props.onEditMemo({
            name: event.target.name.value,
            title: event.target.title.value,
            memoText: event.target.memoText.value,
            date: event.target.date.value,
            rate: event.target.rate.value,
            emotion: event.target.emotion.value,
            id: memo.id
        });
    }
    return (
<React.Fragment>
<ReusableForm
handleFormSubmission={handleEditFormSubmission}
btnText="Save changes"
/>
</React.Fragment>
    );
}
 
EditMemoForm.propTypes = {
    memo: PropTypes.object,
    onEditMemo: PropTypes.func
}

export default EditMemoForm;