import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import { API_KEY } from '../config'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

const TvShows = () => {
  const [tv, setTv] = useState();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setTv(data.results))
      .catch(error => console.error("Error fetching", error));
  }, [])

  return (
    <div className='grid min-h-screen grid-rows-[auto_1fr_auto]'>
      <Navbar />
      <div className='flex flex-col mx-64 py-10 gap-10'>
        <p className='text-4xl border-l-4 border-cyan-400 pl-2'>Popular TV Shows</p>
        <div className='grid grid-cols-5 gap-4'>
          {tv && tv.length > 0 ? (
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
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TvShows
