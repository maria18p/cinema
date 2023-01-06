import axios from "axios";
const BASE_URL = "http://localhost:5000/Users/";

export const addUser = async (requestObject) => {
	const result = await axios.post(BASE_URL + "addUser", requestObject);
	if (result.status === 200) return true;
};

export const getAllUsers = async (requestObject) => {
	const result = await axios.get(BASE_URL + "getAll", { params: "" });
	return result.data;
};
