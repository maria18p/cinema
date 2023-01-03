import React from "react";

import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register";

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
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
