import React, {useState , useEffect}from 'react'
import './Banner.css'
import requests from '../request'
import instance from '../instance'

const Banner = () => {
    const base_url = "https://image.tmdb.org/t/p/original/";


    const [movie, setMovie]= useState({})

    const fetchData = async ()=>{
         const res= await instance.get(requests.fetchNetflixOriginals)
         setMovie(res.data.results[
            Math.floor( Math.random()*res.data.results.length)

         ]);
    }

    console.log(movie);
    useEffect(() => {
      fetchData()
    
      
    },[])

    function truncate(str,n){
     return  str?.length>n?str?.substr(0,n-1)+'...':str;
    }
    

  return (
    <div
    className='banner'
    style={{
        backgroundSize:'cover',
        backgroundImage:`url(${base_url}${movie?.backdrop_path})`
    }}
    >
        
        <div className='banner_content'>
            <h1 className='banner_title'>
                {movie?.name}

            </h1>
            <h2 className='banner_overview'>
                {truncate(movie?.overview,150)}
            </h2>

        </div>
    </div>
  )
}

export default Banner