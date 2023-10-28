import React from "react";
import PropTypes from 'prop-types';
import {auth} from './../firebase';
import { Form, Button, Row } from "react-bootstrap";

function ReusableForm(props) {
    return (
<React.Fragment>
<Form onSubmit={props.handleFormSubmission} className="mt-3" >
<Row>
<Form.Group className="mb-3">
        <Form.Control 
        type="text"
        name="name"
        value={auth.currentUser.email} readOnly
        />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Control 
        type="text"
        name="title"
        placeholder="What was it?"
        />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Control 
        type="text"
        name="memoText"
        placeholder="Your dream"
        />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Control 
        type="date"
        name="date"
        placeholder="Date"
        />
        </Form.Group>
        <Form.Select size="lg" className="mb-3" name="rate">   
            <option selected value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
            <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
            <option value="⭐⭐⭐">⭐⭐⭐</option>
            <option value="⭐⭐">⭐⭐</option>
            <option value="⭐">⭐</option>
          </Form.Select>
         
          <Form.Select size="lg" className="mb-3" name="emotion">
            <option selected value="😍">😍</option>
            <option value="🤣">🤣</option>
            <option value="😱">😱</option>
            <option value="😭">😭</option>
            <option value="😡">😡</option>
            </Form.Select>
       <Form.Group className="mb-3">
        <Button type="submit" >{props.btnText}</Button>
        </Form.Group>
        </Row>
    </Form>
</React.Fragment>
    );
}

ReusableForm.propTypes = {
    
    handleFormSubmission: PropTypes.func,
    btnText: PropTypes.string
};
 
export default ReusableForm;