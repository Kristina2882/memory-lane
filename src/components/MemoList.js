import React from "react";
import PropTypes from 'prop-types';
import Memo from "./Memo";
import {auth} from './../firebase';
import { Container } from "react-bootstrap";

function MemoList(props) {

    const user = auth.currentUser.email;
    const memoListForUser = props.memoList.filter(memo => memo.name === user);

    return (
        <React.Fragment>
         <Container className="mt-3">
        {memoListForUser.map((memo) => 
            <Memo
            whenMemoClicked = {props.onMemoSelection}
            name={memo.name}
            title={memo.title}
            date={memo.date}
            formattedWaitTime={memo.formattedWaitTime}
            rate={memo.rate}
            emotion={memo.emotion}
            id={memo.id}
            key={memo.id}

            />
            
        )}
        </Container>   
         </React.Fragment>
    )
}

MemoList.propTypes = {
    memoList: PropTypes.array,
    onMemoSelection: PropTypes.func
}
export default MemoList;