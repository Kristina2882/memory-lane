import React from 'react';
import PropTypes from 'prop-types';

function Memo(props) {
    return (
        <React.Fragment>
        <h3>{props.name}</h3>
        <h4><em>Seen on: {props.date}</em></h4>
        <h4>{props.rate}</h4>
        <h4>{props.emotion}</h4>
        <hr/>
        </React.Fragment>
    );
}

Memo.propTypes = {
    name: PropTypes.string,
    date: PropTypes.string,
    rate: PropTypes.string,
    emotion: PropTypes.string
}

export default Memo;