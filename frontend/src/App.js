import React, { useState } from "react";

import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register";
import AdminPage from "./Pages/Admin";
import MoviesPage from "./Pages/Movies/MoviesPage";
import { AppContext } from "./AppContext";

function App() {
	const [username, setUsername] = useState("Guest");
	const [userToken, setUserToken] = useState(null);
	const [isAdmin, setIsAdmin] = useState(false);

	return (
		<>
			<AppContext.Provider
				value={{
					username: username,
					setUsername: setUsername,
					userToken: userToken,
					setUserToken: setUserToken,
					isAdmin: isAdmin,
					setIsAdmin: setIsAdmin,
				}}
			>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Home" element={<Home />} />
						<Route path="/Tickets" element={<Home />} />
						<Route path="/Login" element={<Login />} />
						<Route path="/Register" element={<Register />} />
						<Route path="/Manage" element={<AdminPage />} />
						<Route path="/Movies" element={<MoviesPage />} />
					</Routes>
				</BrowserRouter>
			</AppContext.Provider>
		</>
	);
}

export default App;
