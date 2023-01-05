import React from "react";

import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register";
import AdminPage from "./Pages/Admin";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Home" element={<Home />} />
					<Route path="/Tickets" element={<Home />} />
					<Route path="/Login" element={<Login />} />
					<Route path="/Register" element={<Register />} />
					<Route path="/Manage" element={<AdminPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
