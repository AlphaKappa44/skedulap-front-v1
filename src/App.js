// import logo from './logo_LCDMN.jpg';
import "./App.css";
import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserContext from "./context/UserContext";

// import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignUpConfirmation from "./components/SignUpConfirmation";
import User from "./components/User";
import SignIn from "./components/SignIn";
import Profile from "./components/Profile";
import AuthRequired from "./AuthRequired";
import Agenda from "./components/Agenda";

// import UserStateContext from "./components/UserStateContext";

function App() {
  // const baseURL = "http://localhost:8080/users";

  // const [first_name, setFirstName] = useState('default first name');
  // const [last_name, setLastName] = useState('default last_name');
  // const [email, setEmail] = useState('default email');

	const [user, setUser] = useState({
		first_name: null,
		last_name: "default last name",
		email: "default email",
		password: "default password",
	});

	const userProvider={user, setUser };
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

			

		<UserContext.Provider value={userProvider} >

		{/* {user.first_name} */}

			<Header />

			{/* <UserStateContext /> */}

			<React.StrictMode>
				<Routes>
					<Route path="/" element={<Home />} />

					<Route path="/connexion" element={<SignIn  />} />

					<Route path="/formulaire_inscription" element={<SignUp />} />

					<Route
						path="/confirmation_inscription"
						element={<SignUpConfirmation 
							// userInfo={userInfo} 
							/>}
					/>

					<Route
						path="/protected"
						element={
						<AuthRequired>
							<User />
						</AuthRequired>
						}
					/>

					<Route path="/profil/:id" element={<Profile />} />

					<Route path="/utilisateurs" element={<User />} />

					<Route path="/agenda" element={<Agenda />} />
				</Routes>
			</React.StrictMode>

			<Footer />

		</UserContext.Provider>

		</div>
	);
}

export default App;
