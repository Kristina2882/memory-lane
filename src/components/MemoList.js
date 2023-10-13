import React from "react";
import PropTypes from 'prop-types';
import Memo from "./Memo";

function MemoList(props) {
    return (
        <React.Fragment>
        {props.memoList.map((memo, index) => 
            <Memo
            name={memo.name}
            date={memo.date}
            rate={memo.rate}
            emotion={memo.emotion}
            key={index}
            />
            
        )}
         </React.Fragment>
    )
}

MemoList.propTypes = {
    memoList: PropTypes.array
}
export default MemoList;