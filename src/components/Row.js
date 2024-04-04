import React ,{useEffect, useState}from 'react'
import instance from '../instance'
import './Row.css'

function Row ({isPoster, title,fetchURL})  {

    const [movies,setMovies]=useState([])

    const base_url = "https://image.tmdb.org/t/p/original/";
//  backdrop_path

    const fetchData = async()=>{
       const res=  await instance.get(fetchURL)
       setMovies(res.data.results);

    }

    useEffect(() => {
      return () => {
        fetchData()
      }
    }, [])
    // console.log(movies);
    
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='movies_row'>
            { movies.map((movie)=>(
                    <img  className={`img ${isPoster && 'img_poster'}`} src={`${base_url}${isPoster?movie.poster_path: movie.backdrop_path}`} alt="" />
                ))
            }
        </div>
        
    </div>
  )
}

export default Row