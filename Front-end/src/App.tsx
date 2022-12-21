import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Auth/Login';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import Home from './pages/Client/Home';
import AddTest from './pages/Client/AddTest';
import AddPatientTest from './pages/Client/AddPatientTest';
import PatientTests from './pages/Client/PatientTests';
import Tests from './pages/Client/Tests';
import TestDetail from './pages/Client/TestDetail';
import PatientTestDetails from './pages/Client/PatientTestDetails';
import Register from './pages/Auth/Register';
import Navbar from './pages/Navbar';


function App() {
  const isLogin = useSelector((state:any) => state.authReducer.isLogin);
  const Laborant = useSelector((state:any) => state.authReducer.Laborant);
  const Patient = useSelector((state:any) => state.authReducer.Patient);
  return (
    <div className="App">
      <Navbar/>
      {Laborant === null && Patient === null ? <Routes>
        <Route path="/" element={
          <Login/>
          }></Route>
          <Route path="/register" element={
            <Register/>
          }></Route>

      </Routes>:Laborant !== null ? 
        <Routes>
          <Route path="/" element={
            <Home/>
          }>
          </Route>
          <Route path="/AddTest" element={
            <AddTest/>
          }/>
          <Route path="/AddPatientTest" element={
            <AddPatientTest/>
          }/>
          <Route path="/PatientTests" element={
            <PatientTests/>
          }/>
          <Route path="/Tests" element={
            <Tests/>
          }/>
          <Route path="/TestDetail" element={
            <TestDetail/>
          }/>
        </Routes>
        :
        <Routes>
          <Route path="/Home" element={
            <Home/>
          }/>
          <Route path="/PatientTests/:patientId" element={
            <PatientTests/>
          }/>
          <Route path="/PatientTestDetails/:id" element={
            <PatientTestDetails/>
          }/>
        </Routes>
      }

    </div>
  );
}

export default App;
