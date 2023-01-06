import axios from "axios";
const BASE_URL = "http://localhost:5000/Presentations/";

export const addPresentation = async (requestObject) => {
	// console.log("requestObject", requestObject);
	const result = await axios.post(BASE_URL + "add", requestObject);
	// console.log("result", result);
	// if (result.status === 200) return true;
};

export const getAllPresentations = async (requestObject) => {
	const result = await axios.post(BASE_URL + "getAll", requestObject);
	console.log("result", result);
	return result.data;
};

export const getAllPresentations_by_movieId = async (requestObject) => {
	const result = await axios.post(BASE_URL + "getAllByMovie", requestObject);
	console.log("result", result);
	return result.data;
};
