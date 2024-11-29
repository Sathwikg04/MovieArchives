import React, { useState } from 'react';
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link } from 'react-router-dom';

const MovieGallery = ({ movies }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const featuredMovie = movies && movies.length > 0 ? movies[currentIndex] : null;
    const otherMovies = movies && movies.length > 1 ? movies.slice(1, 4) : [];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
    };

    return (
        <div className="flex flex-col lg:flex-row p-6 bg-gray-900 text-white">
            {featuredMovie && (
                <div className="flex-1 lg:mr-8 relative">
                    <img
                        className="w-full rounded-lg"
                        src={`https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path}`}
                        alt={featuredMovie.title}
                    />
                    <div className="absolute bottom-5 left-5 flex items-start gap-4 bg-gradient-to-t from-black/70 p-4 rounded-lg w-full max-w-lg">
                        <img
                            className="w-24 rounded-md"
                            src={`https://image.tmdb.org/t/p/w200${featuredMovie.poster_path}`}
                            alt={featuredMovie.title}
                        />
                        <div>
                            <h1 className="text-2xl font-semibold">{featuredMovie.title}</h1>
                            <p className="text-sm text-gray-300">{featuredMovie.overview}</p>
                            <Link to={`/movie/${featuredMovie.id}`}>
                                <button className="mt-4 px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-white rounded-md">
                                    View More
                                </button>
                            </Link>
                        </div>
                    </div>

                    <button
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700"
                        onClick={handlePrev}
                    >
                        <GrFormPrevious />
                    </button>
                    <button
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700"
                        onClick={handleNext}
                    >
                        <GrFormNext />
                    </button>
                </div>
            )}

            <div className="flex flex-col gap-6 mt-8 lg:mt-0 lg:w-1/3">
                {otherMovies.map((movie) => (
                    movie && movie.backdrop_path ? (
                        <div key={movie.id} className="flex bg-gray-800 rounded-lg p-4 items-center gap-4 h-1/3">
                            <img
                                className="w-16 h-24 rounded-md"
                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <div>
                                <div className='flex flex-row justify-start gap-4'>
                                    <p className='flex items-center justify-center'><MdOutlineStarPurple500 className='text-amber-400' />{movie.vote_average}</p>
                                    <p>{movie.release_date}</p>
                                </div>
                                <h3 className="text-lg font-medium">{movie.title}</h3>
                                <p className="text-xs text-gray-400">{movie.overview.slice(0, 100)}...</p>
                                <Link to={`/movie/${movie.id}`}>
                                    <button className="mt-2 px-3 py-1 bg-cyan-400 hover:bg-cyan-300 text-white text-sm rounded-md">
                                        View More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ) : null
                ))}
            </div>
        </div>
    );
};

export default MovieGallery;
