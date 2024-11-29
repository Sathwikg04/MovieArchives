import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_KEY } from '../config';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import Card from '../Components/Card';
import Footer from '../Components/Footer';

const Item = () => {
    const { itemID } = useParams();
    const [item, setItem] = useState();
    const [like, setLike] = useState();

    const fetchDetails = () => {
        const pathname = window.location.pathname;
        const [, type, id] = pathname.split('/');

        let url;

        switch (type) {
            case 'movie':
                url = `https://api.themoviedb.org/3/movie/${itemID}?api_key=${API_KEY}`;
                break;
            case 'tvshow':
                url = `https://api.themoviedb.org/3/tv/${itemID}?api_key=${API_KEY}`;
                break;
            default:
                console.error("Invalid type");
                return;
        }

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => { console.log(data); setItem(data) })
            .catch(error => console.error("Error fetching details:", error));
    }

    useEffect(() => {
        fetchDetails();

        fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => setLike(data.results))
            .catch(error => console.error("Error fetching", error));
    }, [item])

    return (
        <div>
            <Navbar />
            <div>
                <Hero item={item} />
                <div className='flex flex-col mx-64 py-4 gap-10'>
                    <p className='text-4xl border-l-4 border-cyan-400 pl-2'>You may also like</p>
                    <div className='grid grid-cols-5 gap-4'>
                        {like && like.length > 0 ? (
                            like.map((item, index) => (
                                <Link to={`/movie/${item.id}`} onClick={() => window.scrollTo(0, 0)}>
                                    <Card
                                        key={index}
                                        poster_path={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                        vote_average={item.vote_average}
                                        release_date={item.release_date || item.first_air_date}
                                        title={item.title || item.name}
                                    /></Link>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Item
