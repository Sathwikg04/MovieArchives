import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";

const Hero = ({ item }) => {
    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <div className="relative">
            <img
                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                alt={`${item.title}`}
                className="opacity-25 absolute object-cover h-screen w-screen"
            />

            <div className="relative flex py-40 px-8 lg:px-64 gap-6 z-10">

                <div className="flex-shrink-0">
                    <img
                        src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                        alt={`${item.title}`}
                        className="w-72 rounded-lg shadow-lg"
                    />
                </div>

                <div className="text-white space-y-4 max-w-2xl">
                    <h1 className="text-3xl lg:text-5xl font-bold">{item.title}</h1>

                    <div className="flex items-center gap-8 text-gray-300">
                        <span className="flex items-center gap-1 text-amber-400 font-semibold">
                            <MdOutlineStarPurple500 />
                            {item.vote_average}
                        </span>
                        <span>{item.runtime} mins</span>
                    </div>

                    <div className="flex flex-col gap-2 text-gray-400">
                        <span className="italic">{item.tagline}</span>
                        <p className="text-gray-200">{item.overview}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-gray-300">
                        <div>
                            <p><span className="font-bold">Released:</span> {item.release_date}</p>
                            <p><span className="font-bold">Genre:</span> {item.genres && item.genres.length > 0 ? item.genres.map((genre) => genre.name).join(', ') : 'None'}</p>
                            <p><span className="font-bold">Status:</span> {item.status}</p>
                        </div>
                        <div>
                            <p><span className="font-bold">Duration:</span> {item.runtime} mins</p>
                            <p><span className="font-bold">Language:</span> {item.original_language.toUpperCase()}</p>
                            <p><span className="font-bold">Production:</span> {item.production_companies && item.production_companies.length > 0 ? item.production_companies.map((company) => company.name).join(', ') : 'None'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
