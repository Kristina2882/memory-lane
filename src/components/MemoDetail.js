import React from 'react';

function MemoDetail(props) {
    return (
        <React.Fragment>
        <h3>{props.name}</h3>
        <h4>{props.memoText}</h4>
        <h4><em>Seen on: {props.date}</em></h4>
        <h4>{props.rate}</h4>
        <h4>{props.emotion}</h4>
        <button>Edit</button>  <button>Delete</button>
        </React.Fragment>
    )
}

export default MemoDetail;