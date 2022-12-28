import axios from "axios";
const BASE_URL = "http://localhost:5000/users/";

export const addUser = async (requestObject) => {
	const result = await axios.post(BASE_URL + "addUser", requestObject);
	console.log("result", result);
};
