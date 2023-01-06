import React, { useRef } from "react";
import {
	ContainerGrid2,
	FormInput,
	FormSubmit,
	InputLabel,
	Title,
	VerticalContainer,
} from "../../Style/general";

const RegisterView = (props) => {
	const username = useRef(null);
	const password = useRef(null);

	const handleRegister = () => {
		props.register(username.current.value, password.current.value);
	};

	return (
		<>
			<VerticalContainer>
				<Title>Register:</Title>

				<ContainerGrid2>
					<InputLabel>Username:</InputLabel>
					<FormInput ref={username} />
				</ContainerGrid2>

				<ContainerGrid2>
					<InputLabel>Password:</InputLabel>
					<FormInput ref={password} />
				</ContainerGrid2>

				<FormSubmit onClick={() => handleRegister()}>Register</FormSubmit>
			</VerticalContainer>
		</>
	);
};

export default RegisterView;
