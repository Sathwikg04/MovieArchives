import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";

const IMDBcard = ({rank, title, description, thumbnail, rating, year, imdb_link}) => {
    return (
        <div className='flex flex-col h-120 w-44 gap-2  bg-slate-700'>
            <p>{rank}</p>
            <img className='h-3/4' src={thumbnail} alt="Poster" />
            <div className='flex flex-col px-2 pt-2 gap-2'>
                <div className='flex flex-row justify-evenly gap-4'>
                    <p className='flex items-center justify-center'><MdOutlineStarPurple500 className='text-amber-400'/>{rating}</p>
                    <p>{year}</p>
                </div>
                <p className='pl-2'>{title}</p>
                <p className='pl-2'>{description}</p>
            </div>
            <button className='bg-slate-600 m-4 p-1'><a href={imdb_link} target="_blank">View More</a></button>
        </div>
    )
}

export default IMDBcard
