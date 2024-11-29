import './App.css'
import { createBrowserRouter,Route,RouterProvider,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import TvShows from './Pages/TvShows'
import TopIMDB from './Pages/TopIMDB'
import Andriod from './Pages/Andriod'
import Item from './Pages/Item'

const router = createBrowserRouter([
  {path:"*", element:<Root />},
  {path:"/", element:<Home />},
  {path:"/movies", element:<Movies />},
  {path:"/tvshows", element:<TvShows />},
  {path:"/topimdb", element:<TopIMDB />},
  {path:"/andriod", element:<Andriod />},
  {path:"/movie", element:<Item />, 
    children: [
      {path:":itemID", element:<Item /> }
    ]
  },
  {path:"/tvshow", element:<Item />, 
    children: [
      {path:":itemID", element:<Item /> }
    ]
  },
])

export default function App(){
  return <RouterProvider router={router} />
}

function Root(){
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path='/tvshows' element={<TvShows />}/>
        <Route path='/topimdb' element={<TopIMDB />}/>
        <Route path='/android' element={<Andriod />}/>
        <Route path='/movie/*' element={<Item />} />
        <Route path='/tvshow/*' element={<Item />} />
      </Routes>
    </div>
  )
}