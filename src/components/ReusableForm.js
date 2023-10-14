import React from "react";
import PropTypes from 'prop-types';

function ReusableForm(props) {
    return (
<React.Fragment>
<form onSubmit={props.handleFormSubmission} >
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
        <button type="submit">{props.btnText}</button>
    </form>
</React.Fragment>
    );
}

ReusableForm.propTypes = {
    
    handleFormSubmission: PropTypes.func,
    btnText: PropTypes.string
};
 
export default ReusableForm;