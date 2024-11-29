import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card';
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoIosVideocam } from "react-icons/io";
import { API_KEY } from '../config';
import MovieGallery from '../Components/MovieGallary';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

const Home = () => {
  const [movies, setMovies] = useState();
  const [tv, setTv] = useState();
  const [select, setSelect] = useState('movies');

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error("Error fetching trending movies:", error));

    fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setTv(data.results))
      .catch(error => console.error("Error fetching trending TV shows:", error));
  }, []);

  const selectMovies = movies && movies.length > 0 ? (
    movies.map((item, index) => (
      <Link to={`/movie/${item.id}`} onClick={() => window.scrollTo(0, 0)}>
      <Card
        key={index}
        poster_path={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        vote_average={item.vote_average}
        release_date={item.release_date}
        title={item.title}
      /></Link>
    ))
  ) : (
    <p>Loading Movies...</p>
  )

  const selectTvshows = tv && tv.length > 0 ? (
    tv.map((item, index) => (
      <Link to={`/tvshow/${item.id}`} onClick={() => window.scrollTo(0, 0)}>
      <Card
        key={index}
        poster_path={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        vote_average={item.vote_average}
        release_date={item.first_air_date}
        title={item.name}
      /></Link>
    ))
  ) : (
    <p>Loading TV Shows...</p>
  )

  return (
    <div className='grid min-h-screen grid-rows-[auto_1fr_auto]'>
      <Navbar />
      {console.log(movies)}
      <MovieGallery movies={movies}/>
      <div className='flex flex-col mx-64 py-4'>
        <div className='flex gap-10 py-4'>
          <p className='text-4xl border-l-4 border-cyan-400 pl-2'>Trending</p>
          <div className='flex gap-4 items-center justify-center text-base'>
            <button className={select == 'movies' ? 'flex gap-1 items-center justify-center text-cyan-400' : 'flex gap-1 items-center justify-center'} onClick={() => setSelect('movies')}><BiSolidMoviePlay /> Movies</button>
            <button className={select == 'tv' ? 'flex gap-1 items-center justify-center text-cyan-400' : 'flex gap-1 items-center justify-center'} onClick={() => setSelect('tv')}><IoIosVideocam /> TV Shows</button>
          </div>
        </div>
        <div className='grid grid-cols-5 gap-4'>
          {select == 'movies' ? selectMovies : selectTvshows}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
