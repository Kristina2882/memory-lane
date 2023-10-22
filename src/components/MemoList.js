import React from "react";
import PropTypes from 'prop-types';
import Memo from "./Memo";
import {auth} from './../firebase';

function MemoList(props) {

    const user = auth.currentUser.email;
    const memoListForUser = props.memoList.filter(memo => memo.name === user);

    return (
        <React.Fragment>
        {memoListForUser.map((memo) => 
            <Memo
            whenMemoClicked = {props.onMemoSelection}
            name={memo.name}
            date={memo.date}
            rate={memo.rate}
            emotion={memo.emotion}
            id={memo.id}
            key={memo.id}

            />
            
        )}
         </React.Fragment>
    )
}

MemoList.propTypes = {
    memoList: PropTypes.array,
    onMemoSelection: PropTypes.func
}
export default MemoList;