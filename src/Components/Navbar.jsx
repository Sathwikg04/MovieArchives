import React, { useState } from 'react'
import { VscThreeBars } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { IoArrowBackCircleOutline } from "react-icons/io5";

import { FaHome } from "react-icons/fa";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoIosVideocam } from "react-icons/io";
import { FaFireAlt } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => { setSidebar(!sidebar); console.log(sidebar); };

    const SidebarData = [
        {
            title: 'Home',
            path: '/',
            icon: <FaHome />,
        },
        {
            title: 'Movies',
            path: '/movies',
            icon: <BiSolidMoviePlay />,
        },
        {
            title: 'TV Shows',
            path: '/tvshows',
            icon: <IoIosVideocam />,
        },
        {
            title: 'Top IMDB',
            path: '/topimdb',
            icon: <FaFireAlt />,
        },
        {
            title: 'Andriod',
            path: '/andriod',
            icon: <IoLogoAndroid />,
        },
    ]

    return (
        <>
            <div className='bg-slate-800 py-8 px-8 flex justify-between items-center'>
                <div className='flex justify-center items-center gap-8 px-12'>
                    <p className='text-3xl'>MovieArchives</p>
                    <button className='box-border flex justify-center items-center gap-2 bg-slate-900 p-2' onClick={showSidebar}><VscThreeBars /> Browse</button>
                    <input type="text" placeholder=' Enter Keywords...' className='p-2 w-96' />
                </div>
                <div>
                    <button className='box-border flex justify-center items-center gap-2 bg-slate-900 p-2'>Login</button>
                </div>
            </div>
            <nav className={sidebar
                ? 'bg-slate-800 w-64 h-screen justify-center fixed top-0 transition-all left-0 duration-700 z-20 py-3 px-3'
                : 'bg-slate-800 w-64 h-screen justify-center fixed top-0 transition-all duration-700 z-20 -left-64 py-3 px-3'}>
                <ul onClick={showSidebar} className='left-0 '>
                    <li>
                        <Link>
                            <IoArrowBackCircleOutline size={30} />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className='flex justify-start items-center list-none h-16 py-2 pl-4 transition-all duration-700'>
                                <Link className='no-underline text-white flex items-center pl-4 gap-2' to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            {sidebar && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-10"
                    onClick={showSidebar}
                ></div>
            )}
        </>
    )
}

export default Navbar
