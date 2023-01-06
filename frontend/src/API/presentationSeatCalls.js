import axios from "axios";
const BASE_URL = "http://localhost:5000/PresentationSeats/";

export const addPresentationSeats = async (requestObject) => {
	const result = await axios.post(BASE_URL + "add", requestObject);
	console.log("result", result);
};

export const getPresentationSeatsByPresentation = async (params) => {
	const result = await axios.post(BASE_URL + "getByPresentation", params);
	return result.data;
};
