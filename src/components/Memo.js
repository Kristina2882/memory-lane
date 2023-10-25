import React from 'react';
import PropTypes from 'prop-types';

function Memo(props) {
    return (
        <React.Fragment>
         <div onClick={() => props.whenMemoClicked(props.id)}> 
        <h3>{props.name}</h3>
        <h4><em>Added {props.formattedWaitTime} ago</em></h4>
        <h4><em>Seen on: {props.date.toString()}</em></h4>
        <h2>{props.rate}</h2>
        <h1>{props.emotion}</h1>
        <hr/>
        </div>  
        </React.Fragment>
    );
}

Memo.propTypes = {
    name: PropTypes.string,
    date: PropTypes.object,
    rate: PropTypes.string,
    emotion: PropTypes.string,
    whenMemoClicked: PropTypes.func,
    formattedWaitTime: PropTypes.string
}

export default Memo;