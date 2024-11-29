import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center mx-20 my-14 gap-6'>
            <div>
                <ul className='flex gap-6'>
                    <li className='cursor-pointer'>Android App</li>
                    <li className='cursor-pointer'>Terms of services</li>
                    <li className='cursor-pointer'>Contact</li>
                    <li className='cursor-pointer'>Sitemap</li>
                    <li className='cursor-pointer'>FAQ</li>
                </ul>
            </div>
            <div className='text-sm text-slate-400'>MoviesArchives is a Free Movies and TV Shows browsing site with zero ads. We let you search movies and Tv shows online without having to register or paying, with over 10000 movies and TV-Series.</div>
            <div>©MoviesArchives</div>
        </div>
    )
}

export default Footer
