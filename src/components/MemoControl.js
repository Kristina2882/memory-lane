import React from "react";
import NewMemoForm from "./NewMemoForm";
import MemoList from "./MemoList";
import MemoDetail from "./MemoDetail";

class MemoControl extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
        formVisible: false,
        mainMemoList: [],
        selectedMemo: null
    };
 }

 handleClick = () => {
    if (this.state.selectedMemo !== null) {
     this.setState({
     formVisible: false,
     selectedMemo: null
     });
    }
    else {
    this.setState(prevState => ({
        formVisible: !prevState.formVisible
    }));
}
 }

 handleAddingNewMemo = (newMemo) => {
    const newMainMemoList = this.state.mainMemoList.concat(newMemo);
    this.setState({
     mainMemoList:newMainMemoList,
     formVisible: false
    });
 }

 handleChangeSelectedMemo = (id) => {
    const newSelectedmemo = this.state.mainMemoList.filter(memo => memo.id === id)[0];
    this.setState({
        selectedMemo: newSelectedmemo
    });
 }

 render() {
    let currentlyVisible;
    let buttontext = null;

    if (this.state.selectedMemo !== null) {
        currentlyVisible = <MemoDetail memo={this.state.selectedMemo}/>
        buttontext = "To Memos";
    }

    else if (this.state.formVisible) {
        currentlyVisible = <NewMemoForm onAddingMemo={this.handleAddingNewMemo}/>;
        buttontext = "To Memos";
    }
    else {
    currentlyVisible = <MemoList memoList={this.state.mainMemoList} onMemoSelection = {this.handleChangeSelectedMemo}/>;
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