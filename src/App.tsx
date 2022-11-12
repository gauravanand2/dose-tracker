import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Register from './components/register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
