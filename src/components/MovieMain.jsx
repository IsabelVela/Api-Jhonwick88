import React from 'react'
import Gender from './Gender'
import movie from '../assets/peliculas.json'
import TopCastContainer from './TopCastContainer'
import './MovieMain.css'
const MovieMain = ({moviepostman}) => {
  return (
    <div className='main'>
        <img src={moviepostman.Poster} alt="" />
        <Gender moviepostman={moviepostman}/>
        <span className='resumen'>
          
          {moviepostman.Plot}
            
        </span>
      
    </div>
  )
}

export default MovieMain

