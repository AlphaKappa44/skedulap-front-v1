// import logo from './logo_LCDMN.jpg';
import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignUpConfirmation from './components/SignUpConfirmation';
import User from './components/User';

function App() {
  return (
    <div className="App">

      <Header />
      <React.StrictMode>
      <Routes>

        <Route path="/" element={
        <Home />} />

        <Route path="/formulaire_inscription" element={
        <SignUp />} />
        
        <Route path="/confirmation_inscription" element={
        <SignUpConfirmation />} />

        <Route path="/users" element={
        <User />} />    
        
      </Routes>
      </React.StrictMode>
      <Footer />

    </div>
  );
}


export default App;
