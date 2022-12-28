import React, { useRef } from "react";
import {
	Container_Grid_2,
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

				<Container_Grid_2>
					<InputLabel>Username:</InputLabel>
					<FormInput ref={username} />
				</Container_Grid_2>

				<Container_Grid_2>
					<InputLabel>Password:</InputLabel>
					<FormInput ref={password} />
				</Container_Grid_2>

				<FormSubmit onClick={() => handleRegister()}>Register</FormSubmit>
			</VerticalContainer>
		</>
	);
};

export default RegisterView;
