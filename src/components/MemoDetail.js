import React from 'react';
import PropTypes from 'prop-types';

function MemoDetail(props) {
    const {memo} = props;
    return (
        <React.Fragment>
        <h3>{memo.name}</h3>
        <h4>{memo.memoText}</h4>
        <h4><em>Seen on: {memo.date}</em></h4>
        <h4>{memo.rate}</h4>
        <h4>{memo.emotion}</h4>
        <button >Edit</button>  <button onClick={() => props.onDeleteClick(memo.id)}>Delete</button>
        </React.Fragment>
    )
}

MemoDetail.propTypes = {
    memo: PropTypes.object,
    onDeleteClick: PropTypes.func
}

export default MemoDetail;