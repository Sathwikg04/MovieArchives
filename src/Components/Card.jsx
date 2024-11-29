import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";


const Card = ({ poster_path, title, release_date, vote_average }) => {
    return (
        <div className='flex flex-col h-120 w-44 gap-2  bg-slate-700'>
            <img className='h-3/4' src={poster_path} alt="Poster" />
            <div className='flex flex-col px-2 pt-2 gap-2'>
                <div className='flex flex-row justify-evenly gap-4'>
                    <p className='flex items-center justify-center'><MdOutlineStarPurple500 className='text-amber-400'/>{vote_average}</p>
                    <p>{release_date}</p>
                </div>
                <p className='pl-2'>{title}</p>
            </div>
            <button className='bg-slate-600 m-4 p-1'>View More</button>
        </div>
    )
}

export default Card
