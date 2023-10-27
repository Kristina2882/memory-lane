
import React from 'react';
import MemoControl from './MemoControl';
import SignIn from './SignIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignOut from './SingOut';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


function App() {
  return (
  <Router>
    <Container>
     <Routes>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/' element={<MemoControl/>}/>
      <Route path='/sign-out' element={<SignOut />} />
     </Routes>
     </Container>
  </Router>
  );
}

export default App;
