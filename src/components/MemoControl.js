import React, {useState, useEffect} from "react";
import NewMemoForm from "./NewMemoForm";
import MemoList from "./MemoList";
import MemoDetail from "./MemoDetail";
import EditMemoForm from "./EditMemoForm";
import {db, auth}  from "./../firebase";
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc, query, orderBy } from "firebase/firestore";
import { formatDistanceToNow } from "date-fns";
import { Container, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import moonImg from './../img/moon.png';
import { Button } from "react-bootstrap";

function MemoControl() {

const [formVisible, setFormVisible] = useState(false);
const [mainMemoList, setMainMemoList] = useState([]);
const [selectedMemo, setSelectedMemo] = useState(null);
const [editing, setEditing] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {

const queryOrderedByTimeCreated = query(
    collection(db, "memos"),
    orderBy('timeCreated','desc')
);

 const unSubscribe = onSnapshot(
    queryOrderedByTimeCreated,
    (collectionSnapshot) => {
     const memos = [];
     collectionSnapshot.forEach((memo) => {
        const timeCreated = memo.get('timeCreated', {serverTimestamps: 'estimate'}).toDate();
        const jsDate = new Date(timeCreated);
     memos.push({
     name: memo.data().name,
     memoText: memo.data().memoText,
     date: memo.data().date,
     rate: memo.data().rate,
     emotion: memo.data().emotion,
     timeCreated: jsDate,
     formattedWaitTime: formatDistanceToNow(jsDate),
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
}, [])

useEffect(() => {
    function updateMemoElapseWaitTime() {
        const newMainMemoList = mainMemoList.map((memo) => {
            const newFotmattedWaitTime = formatDistanceToNow(memo.timeCreated);
            return {...memo, formattedWaitTime: newFotmattedWaitTime};
        });
        setMainMemoList(newMainMemoList);
    }

    const waitTimeUpdateTimer = setInterval(() =>
    updateMemoElapseWaitTime(), 
    60000 
    );

    return function cleanUp() {
        clearInterval(waitTimeUpdateTimer);
    }
}, [mainMemoList])

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

let signInOutLink;
let currentlyVisible;
let buttontext = null;

if (auth.currentUser === null) {
    signInOutLink = <Nav.Link href = '/sign-in'><h2>Sign In</h2></Nav.Link> 
    currentlyVisible = <h2 className="mt-3">Please sign in to view your memos🖤</h2>
    buttontext = "+ Add";

}
else if (auth.currentUser !== null) {
    signInOutLink = <Nav.Link href = '/sign-out'><h2>Sign Out</h2></Nav.Link> 

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
    buttontext = "+ Add";
    }

 }
 return (
    <React.Fragment>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Nav>
    <Navbar.Brand><img src={moonImg} alt='moon'/></Navbar.Brand>
     <Nav.Link href="/"><h2>Memory Lane</h2></Nav.Link>           
   {signInOutLink}
   </Nav>
   <Nav className="justify-content-end">
   {error ? null : <Button variant="outline-secondary" size="sm"  onClick={handleClick}><h4><strong>{buttontext}</strong></h4></Button> }
   <Navbar.Text><h4><em>  ...Follow your dreams!</em></h4></Navbar.Text>
   </Nav>
   </Container>
   </Navbar>
    {currentlyVisible}
    </React.Fragment>
 );
}

export default MemoControl;