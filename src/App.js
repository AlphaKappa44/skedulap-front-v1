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
import SignIn from './components/SignIn';
import Profile from './components/Profile';

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

        <Route path="/connexion" element={
        <SignIn />} />

        <Route path="/profil/:id" element={
        <Profile />} />

        <Route path="/utilisateurs" element={
        <User />} />    
        
      </Routes>
      </React.StrictMode>
      <Footer />

    </div>
  );
}


export default App;
