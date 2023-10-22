
import React from 'react';
import MemoControl from './MemoControl';
import Header from './Header';
import SignIn from './SignIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignOut from './SingOut';


function App() {
  return (
  <Router>
     <Header/>
     <Routes>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/' element={<MemoControl/>}/>
      <Route path='/sign-out' element={<SignOut />} />
     </Routes>
  </Router>
  );
}

export default App;
