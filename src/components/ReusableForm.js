import React from "react";
import PropTypes from 'prop-types';
import {auth} from './../firebase';

function ReusableForm(props) {
    return (
<React.Fragment>
<form onSubmit={props.handleFormSubmission} >
        <input
        type="text"
        name="name"
        value={auth.currentUser.email} readOnly
        />
         <input
        type="text"
        name="memoText"
        placeholder="Your dream"
        />
         <input
        type="date"
        name="date"
        placeholder="Date"
        />
        <select name="rate">   
            <option selected value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
            <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
            <option value="⭐⭐⭐">⭐⭐⭐</option>
            <option value="⭐⭐">⭐⭐</option>
            <option value="⭐">⭐</option>
          </select>
         
          <select name="emotion">
            <option selected value="😍">😍</option>
            <option value="🤣">🤣</option>
            <option value="😱">😱</option>
            <option value="😭">😭</option>
            <option value="😡">😡</option>
          </select>
       
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