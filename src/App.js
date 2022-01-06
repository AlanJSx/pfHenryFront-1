import './App.css';
import React,{Fragment} from "react";
import {  Route, Routes } from "react-router-dom";

import LandingPage from '../src/Pages/LandingPage/LandingPage';
import FormAsociate from '../src/Components/FormAsociate/FormAsociate';
import FormAddAsociateGrup from '../src/Components/FormAsociate/FormAddAsociateGrup';
import Login from './Pages/Login/Login';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/asociate' element={<FormAsociate/>}/>
        <Route path='/asociate/group' element={<FormAddAsociateGrup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Fragment>
  );
  
}

export default App;
