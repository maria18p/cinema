import React, { useRef } from "react";
import {
	Container_Grid_2,
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
				<Container_Grid_2>
					<InputLabel>Username:</InputLabel>
					<FormInput ref={username} />
				</Container_Grid_2>

				<Container_Grid_2>
					<InputLabel>Password:</InputLabel>
					<FormInput ref={password} />
				</Container_Grid_2>

				<FormSubmit onClick={() => handleLogin()}>Login</FormSubmit>
			</VerticalContainer>
		</>
	);
}
