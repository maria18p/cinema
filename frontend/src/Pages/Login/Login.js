import React, { useContext } from "react";
import LoginView from "./LoginView";
import { login } from "../../API/loginCalls";
import { useNavigate } from "react-router";
import { AppContext } from "../../AppContext";

const Login = () => {
	const appContext = useContext(AppContext);
	const navigate = useNavigate();

	const submit = async (username, password) => {
		const userObj = { username: username, password: password };
		const login_result = await login(userObj);
		if (login_result != "") {
			appContext.setUsername(login_result.username);
			if (login_result.permission === 1) appContext.setIsAdmin(true);
			alert("You are now logged in");
			navigate("/");
		} else {
			alert("Invalid username or password");
		}
		// if (login_result) {

		// }
	};

	return <LoginView submit={submit} />;
};

export default Login;
