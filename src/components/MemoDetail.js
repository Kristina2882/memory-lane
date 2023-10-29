import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function MemoDetail(props) {
    const {memo} = props;
    return (
        <React.Fragment >
        <h4  className="mt-3">{memo.name}</h4>
        <h4><strong>{memo.title}</strong></h4>
        <h5><em>Added {memo.formattedWaitTime} ago</em></h5>
        <h4>{memo.memoText}</h4>
        <h5><em>Seen on: {memo.date.toString()}</em></h5>
        <h2>{memo.rate}</h2>
        <h1>{memo.emotion}</h1>
        <Button onClick={props.onEditClick}  variant="outline-dark"className='mt-3' >Edit</Button>  <Button onClick={() => props.onDeleteClick(memo.id)} variant="outline-danger" className='mt-3'>Delete</Button>
        </React.Fragment>
    )
}

MemoDetail.propTypes = {
    memo: PropTypes.object,
    onDeleteClick: PropTypes.func,
    onEditClick: PropTypes.func
}

export default MemoDetail;