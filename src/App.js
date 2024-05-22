import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './Component/LoginForm/LoginForm';
import LoginSuccess from './Component/LoginForm/LoginSuccess';
import Dashboard from './Component/Dashboard/Dashboard';
import Register from './Component/Register/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/login-success" element={<LoginSuccess />} />
      <Route path="/login-success/:userID" element={<LoginSuccess />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
