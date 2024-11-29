import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import IMDBcard from '../Components/IMDBcard';
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoIosVideocam } from "react-icons/io";
import Footer from '../Components/Footer';

const TopIMDB = () => {
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);
  const [select, setSelect] = useState('movies');

  const urlmovies = 'https://imdb-top-100-movies.p.rapidapi.com/';
  const urltv = 'https://imdb-top-100-movies.p.rapidapi.com/series/';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '59824cda60msh8aa82d52015c3a2p152e94jsncaf37858b953',
      'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  };

  async function fetchIMDBmovies() {
    try {
      const response = await fetch(urlmovies, options);
      const result = await response.json();
      console.log(result);
      setMovies(result);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchIMDBtv() {
    try {
      const response = await fetch(urltv, options);
      const result = await response.json();
      console.log(result);
      setTv(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchIMDBmovies();
    fetchIMDBtv();
  },[])

  const selectMovies = movies && movies.length > 0 ? (
    movies.map((item, index) => (
      <IMDBcard
        key={index}
        rank={item.rank} 
        description={item.description} 
        thumbnail={item.thumbnail} 
        rating={item.rating} 
        year={item.year}
        title={item.title}
        imdb_link={item.imdb_link}
      />
    ))
  ) : (
    <p>Loading Movies...</p>
  )

  const selectTvshows = tv && tv.length > 0 ? (
    tv.map((item, index) => (
      <IMDBcard
        key={index}
        rank={item.rank} 
        description={item.description} 
        thumbnail={item.thumbnail} 
        rating={item.rating} 
        year={item.year}
        title={item.title}
        imdb_link={item.imdb_link}
      />
    ))
  ) : (
    <p>Loading TV Shows...</p>
  )

  return (
    <div className='grid min-h-screen grid-rows-[auto_1fr_auto]'>
      <Navbar />
      <div className='flex flex-col mx-64 py-4'>
        <div className='flex gap-10 py-4'>
          <p className='text-4xl border-l-4 border-cyan-400 pl-2'>Top IMDB</p>
          <div className='flex gap-4 items-center justify-center text-base'>
            <button className={select == 'movies' ? 'flex gap-1 items-center justify-center text-cyan-400' : 'flex gap-1 items-center justify-center'} onClick={() => setSelect('movies')}><BiSolidMoviePlay /> Movies</button>
            <button className={select == 'tv' ? 'flex gap-1 items-center justify-center text-cyan-400' : 'flex gap-1 items-center justify-center'} onClick={() => setSelect('tv')}><IoIosVideocam /> TV Shows</button>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4'>
          {select == 'movies' ? selectMovies : selectTvshows}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TopIMDB
