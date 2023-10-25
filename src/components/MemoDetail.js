import React from 'react';
import PropTypes from 'prop-types';

function MemoDetail(props) {
    const {memo} = props;
    return (
        <React.Fragment>
        <h3>{memo.name}</h3>
        <h4><em>Added {memo.formattedWaitTime} ago</em></h4>
        <h4>{memo.memoText}</h4>
        <h4><em>Seen on: {memo.date.toString()}</em></h4>
        <h2>{memo.rate}</h2>
        <h1>{memo.emotion}</h1>
        <button onClick={props.onEditClick} >Edit</button>  <button onClick={() => props.onDeleteClick(memo.id)}>Delete</button>
        </React.Fragment>
    )
}

MemoDetail.propTypes = {
    memo: PropTypes.object,
    onDeleteClick: PropTypes.func,
    onEditClick: PropTypes.func
}

export default MemoDetail;