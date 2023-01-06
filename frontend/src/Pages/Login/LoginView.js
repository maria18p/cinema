import React, { useRef } from "react";
import {
	ContainerGrid2,
	FormInput,
	FormSubmit,
	InputLabel,
	Title,
	VerticalContainer,
} from "../../Style/general";

export default function LoginView(props) {
	const username = useRef(null);
	const password = useRef(null);

	const handleLogin = () => {
		props.submit(username.current.value, password.current.value);
	};

	return (
		<>
			<VerticalContainer>
				<Title>Login</Title>
				<ContainerGrid2>
					<InputLabel>Username:</InputLabel>
					<FormInput ref={username} />
				</ContainerGrid2>

				<ContainerGrid2>
					<InputLabel>Password:</InputLabel>
					<FormInput ref={password} />
				</ContainerGrid2>

				<FormSubmit onClick={() => handleLogin()}>Login</FormSubmit>
			</VerticalContainer>
		</>
	);
}
