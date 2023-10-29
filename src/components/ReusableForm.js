import React from "react";
import PropTypes from 'prop-types';
import {auth} from './../firebase';
import { Form, Button, Row, Col } from "react-bootstrap";

function ReusableForm(props) {
    return (
<React.Fragment>
<Form onSubmit={props.handleFormSubmission} className="mt-3" >
<Row>
    <Col>
        <Form.Group className="mb-3">
        <Form.Control 
        type="text"
        name="name"
        value={auth.currentUser.email} readOnly
        />
        </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3">
        <Form.Control 
        type="text"
        name="title"
        placeholder="What was it?"
        />
        </Form.Group>
        </Col>
        </Row>
        <Form.Group className="mb-3">
        <Form.Control 
        type="text"
        name="memoText"
        placeholder="Your dream"
        />
        </Form.Group>
        <Row>
         <Col>
        <Form.Group className="mb-3">
        <Form.Control 
        type="date"
        name="date"
        placeholder="Date"
        />
        </Form.Group>
        </Col>
        <Col>
        <Form.Select size="lg" className="mb-3" name="rate">   
            <option selected value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
            <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
            <option value="⭐⭐⭐">⭐⭐⭐</option>
            <option value="⭐⭐">⭐⭐</option>
            <option value="⭐">⭐</option>
          </Form.Select>
          </Col>
          <Col>
          <Form.Select size="lg" className="mb-3" name="emotion">
            <option selected value="😍">😍</option>
            <option value="🤣">🤣</option>
            <option value="😱">😱</option>
            <option value="😭">😭</option>
            <option value="😡">😡</option>
            </Form.Select>
            </Col>
       <Form.Group className="mb-3">
        <Button type="submit" variant="outline-dark"  size="lg">{props.btnText}</Button>
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