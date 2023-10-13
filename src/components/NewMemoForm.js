import React from "react";
import PropTypes from 'prop-types';
import {v4} from 'uuid';

function NewMemoForm(props) {

   function handleNewMemoFormSubmission(event) {
        event.preventDefault();
        props.onAddingMemo({
            name: event.target.name.value,
            memoText: event.target.memoText.value,
            date: event.target.date.value,
            rate: event.target.rate.value,
            emotion: event.target.emotion.value,
            id: v4()
        });

    }
    return (
<React.Fragment>
    <form onSubmit={handleNewMemoFormSubmission} >
        <input
        type="text"
        name="name"
        placeholder="Your name"
        />
         <input
        type="text"
        name="memoText"
        placeholder="Your dream"
        />
         <input
        type="text"
        name="date"
        placeholder="Date"
        />
         <input
        type="text"
        name="rate"
        placeholder="Stars"
        />
         <input
        type="text"
        name="emotion"
        placeholder="Your emotion"
        />
        <button type="submit">Add Memo</button>
    </form>
</React.Fragment>
    );
}

NewMemoForm.propTypes = {
    onAddingMemo: PropTypes.func
}
 

export default NewMemoForm;