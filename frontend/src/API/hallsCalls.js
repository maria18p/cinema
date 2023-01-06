import axios from "axios";
const BASE_URL = "http://localhost:5000/Halls/";

export const addHall = async (requestObject) => {
	const result = await axios.post(BASE_URL + "addHall", requestObject);
	return result.status;
};

export const getAllHalls = async (requestObject) => {
	const result = await axios.post(BASE_URL + "getAll");
	return result.data;
};

export const getHallById = async (params) => {
	const result = await axios.get(BASE_URL + "getById", {
		params,
	});
	return result.data;
};

export const addSeat = async (requestObject) => {
	const result = await axios.post(BASE_URL + "addSeat", requestObject);
	return result.status;
};

export const getAllSeats = async (params) => {
	const result = await axios.post(BASE_URL + "getAllSeats", {
		params,
	});
	return result.data;
};
