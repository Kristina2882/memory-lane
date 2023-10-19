
import React from 'react';
import MemoControl from './MemoControl';
import Header from './Header';
import SignIn from './SignIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
  <Router>
     <Header/>
     <Routes>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/' element={<MemoControl/>}/>
     </Routes>
  </Router>
  );
}

export default App;
