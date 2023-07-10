import React from "react";
import { movies } from "./GetMovies";

const Banner = () => {
  console.log(movies);
  let movie = movies.results[0];
  return (
    <>
      {movie == "" ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="card banner-card">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className="card-img-top banner-img"
          />
          {/* <div className="card-body"> */}
            <h1 className="card-title banner-title">{movie.original_title}</h1>
            <p className="card-text banner-text">{movie.overview}</p>
            {/* <a href="#" className="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        //  </div>
      )}
    </>
  );
};

export default Banner;
