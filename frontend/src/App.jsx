import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Login from './pages/Login';
import Register from './pages/Register';
import './App.css'

function App() {

  return (
    
    <BrowserRouter> 
     <ToastContainer position="top-right" autoClose={3000} />
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/register" element={<Register />}/>

    </Routes>
  </BrowserRouter>

  )
}

export default App
