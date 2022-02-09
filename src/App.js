// import logo from './logo_LCDMN.jpg';
import './App.css';
import React from 'react';
import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
// import axios from "axios";
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignUpConfirmation from './components/SignUpConfirmation';
import User from './components/User';
import SignIn from './components/SignIn';
import Profile from './components/Profile';

function App() {

  // const baseURL = "http://localhost:8080/users";

  // const [first_name, setFirstName] = useState('default first name');
  // const [last_name, setLastName] = useState('default last_name');
  // const [email, setEmail] = useState('default email');

  const [userInfo, setUserInfo] = useState({
    first_name: 'default first name',
    last_name: 'default last name',
    email: 'default email',
    password: 'default password'
  });

  //  const [signedUser, setSignedUser] = useState({})
  // const [allUsers, setAllUsers] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setAllUsers(response.data);
  //     console.log(response.data);
  //   });
  // }, []);

  

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
        <SignUpConfirmation 
         userInfo = {userInfo}
          // firstName={first_name} 
          // setFirstName={setFirstName}
          // lastName={last_name}
          // setLastName={setLastName}
          // email={email}
          // setEmail={setEmail}
         />} />

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
