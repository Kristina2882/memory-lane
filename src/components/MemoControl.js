import React from "react";
import NewMemoForm from "./NewMemoForm";
import MemoList from "./MemoList";

class MemoControl extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
        formVisible: false,
        mainMemoList: []
    };
 }

 handleClick = () => {
    this.setState(prevState => ({
        formVisible: !prevState.formVisible
    }));
 }

 handleAddingNewMemo = (newMemo) => {
    const newMainMemoList = this.state.mainMemoList.concat(newMemo);
    this.setState({
     mainMemoList:newMainMemoList,
     formVisible: false
    });
 }

 render() {
    let currentlyVisible;
    let buttontext = null;

    if (this.state.formVisible) {
        currentlyVisible = <NewMemoForm onAddingMemo={this.handleAddingNewMemo}/>;
        buttontext = "To Memos";
    }
    else {
    currentlyVisible = <MemoList memoList={this.state.mainMemoList}/>;
    buttontext = "Add Memo";
    }
    return (
   <React.Fragment>
   {currentlyVisible}
   <button onClick={this.handleClick}>{buttontext}</button>
   </React.Fragment>
);
 }
}

export default MemoControl;