import axios from "axios";
const BASE_URL = "http://localhost:5000/Auth/";

export const login = async (params) => {
	const result = await axios.get(BASE_URL + "login", { params });
	return result.data;
};
// TODO LOGOUT
