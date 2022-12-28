import React from "react";
import LoginView from "./LoginView";
import { login } from "../../API/loginCalls";
import { useNavigate } from "react-router";

const Login = () => {
	const navigate = useNavigate();

	const submit = async (username, password) => {
		const userObj = { username: username, password: password };
		const login_result = await login(userObj);
		if (login_result) {
			alert("You are now logged in");
			navigate("/");
		}
	};

	return <LoginView submit={submit} />;
};

export default Login;
