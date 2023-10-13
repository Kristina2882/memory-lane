import React from "react";
import PropTypes from 'prop-types';
import Memo from "./Memo";

function MemoList(props) {
    return (
        <React.Fragment>
        {props.memoList.map((memo) => 
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