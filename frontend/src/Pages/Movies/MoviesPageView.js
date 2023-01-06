import React from "react";
import {
	MoviesGrid,
	MoviesGridImage,
	MoviesGridItem,
	MoviesGridItemTitle,
} from "./Movies.style";
import shortid from "shortid";
import { isRouteErrorResponse } from "react-router";

export default function MoviesPageView(props) {
	const generateMovieGrid = () => {
		return (
			<>
				{props.movies.map((movie, index) => {
					let url = "";
					if (movie.posterURL) url = movie.posterURL;
					console.log("url", url);

					return (
						<MoviesGridItem key={shortid.generate()}>
							<MoviesGridItemTitle key={shortid.generate()}>
								{movie.name}
							</MoviesGridItemTitle>
							<MoviesGridImage
								key={shortid.generate()}
								// src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
								src={url}
								alt="No Preview available"
							/>
						</MoviesGridItem>
					);
				})}
			</>
		);
	};

	return (
		<>
			<MoviesGrid>{generateMovieGrid()}</MoviesGrid>
			<MoviesGridImage
				key={shortid.generate()}
				src="https://www.imdb.com/title/tt1630029/mediaviewer/rm92486145/?ref_=tt_ov_i"
				// src={url.toString()}
				alt="No Preview available"
			/>
		</>
	);
}
