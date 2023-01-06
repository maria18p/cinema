import axios from "axios";
const BASE_URL = "http://localhost:5000/Movies/";

export const addMovie = async (requestObject) => {
	const result = await axios.post(BASE_URL + "add", requestObject);
	if (result.status === 200) return true;
};

export const getAllMovies = async (requestObject) => {
	const result = await axios.post(BASE_URL + "getAll", { params: "" });
	return result.data;
};

export const getMovieById = async (params) => {
	const result = await axios.get(BASE_URL + "getById", {
		params,
	});
	return result.data;
};
