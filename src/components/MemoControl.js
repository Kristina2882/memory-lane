import React, {useState, useEffect} from "react";
import NewMemoForm from "./NewMemoForm";
import MemoList from "./MemoList";
import MemoDetail from "./MemoDetail";
import EditMemoForm from "./EditMemoForm";
import db from "./../firebase";
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";

function MemoControl() {

const [formVisible, setFormVisible] = useState(false);
const [mainMemoList, setMainMemoList] = useState([]);
const [selectedMemo, setSelectedMemo] = useState(null);
const [editing, setEditing] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
 const unSubscribe = onSnapshot(
    collection(db, "memos"),
    (collectionSnapshot) => {
     const memos = [];
     collectionSnapshot.forEach((memo) => {
     memos.push({
     name: memo.data().name,
     memoText: memo.data().memoText,
     date: memo.data().date,
     rate: memo.data().rate,
     emotion: memo.data().emotion,
     id: memo.id
     });
     });
     setMainMemoList(memos);
    },
    (error) => {
     setError(error.message);
    }
 );
 return () => unSubscribe();
}, []);

 const handleClick = () => {
    if (selectedMemo !== null) {
     setFormVisible(false);
     setSelectedMemo(null);
     setEditing(false);
    }
    else {
    setFormVisible(!formVisible);
    }
}

 const handleAddingNewMemo = async (newMemo) => {
    await addDoc(collection(db, "memos"), newMemo);
    setFormVisible(false);
 }

 const handleChangeSelectedMemo = (id) => {
    const newSelectedmemo = mainMemoList.filter(memo => memo.id === id)[0];
    setSelectedMemo(newSelectedmemo);
 }

 const handleDeletingMemo = async (id) => {
   await deleteDoc(doc(db, "memos", id));
    setSelectedMemo(null);
 }

const handleEditClick = () => {
    setEditing(true);
 }

 const handleEditingMemoInList = async (memoToEdit) => {
   const memoRef = doc(db, "memos", memoToEdit.id);
   await updateDoc(memoRef, memoToEdit);
  setSelectedMemo(null);
  setEditing(false);
}

 
    let currentlyVisible;
    let buttontext = null;

    if(error) {
        currentlyVisible =  <p>There was an error: {error}</p>
    }

    else if (editing) {
        currentlyVisible = <EditMemoForm memo={selectedMemo} onEditMemo={handleEditingMemoInList}/>
        buttontext="To Memos";
    }

    else if (selectedMemo !== null) {
        currentlyVisible = <MemoDetail memo={selectedMemo} onDeleteClick={handleDeletingMemo} onEditClick= {handleEditClick}/>
        buttontext = "To Memos";
    }

    else if (formVisible) {
        currentlyVisible = <NewMemoForm onAddingMemo={handleAddingNewMemo}/>;
        buttontext = "To Memos";
    }
    else {
    currentlyVisible = <MemoList memoList={mainMemoList} onMemoSelection = {handleChangeSelectedMemo}/>;
    buttontext = "Add Memo";
    }
    return (
   <React.Fragment>
   {currentlyVisible}
  {error ? null : <button onClick={handleClick}>{buttontext}</button> }
   </React.Fragment>
);

 }

export default MemoControl;