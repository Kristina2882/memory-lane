import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

function Memo(props) {
    return (
        <React.Fragment>
         
         <div onClick={() => props.whenMemoClicked(props.id)}> 
         <Row>
            <Col sm={9}>
        <h3>{props.title}</h3>
        <h4><em>Added {props.formattedWaitTime} ago</em></h4>
        <h4><em>Seen on: {props.date.toString()}</em></h4>
        </Col>
        <Col sm={3}>
        <h2>{props.rate}</h2>
        <h1>{props.emotion}</h1>
        </Col>
        </Row>
        <hr/>
        </div>  
        </React.Fragment>
    );
}

Memo.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.object,
    rate: PropTypes.string,
    emotion: PropTypes.string,
    whenMemoClicked: PropTypes.func,
    formattedWaitTime: PropTypes.string
}

export default Memo;