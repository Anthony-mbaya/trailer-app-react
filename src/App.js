import React, { useState } from 'react';
import  movieTrailer  from 'movie-trailer';
import ReactPlayer from 'react-player';

export const App =()=>{
  const [trailer, setTrailer] = useState("inception");
  const [trailerURL, setTrailerURL] = useState("https://youtu.be/PARfU2Vi694");
 
  function search(){
    movieTrailer(trailer).then((res) => {
      setTrailerURL(res)
    })
  }
 
  return(
    <div className='trailer-container'>
    <div className='search-bar'>
      <input type="text" className='input' placeholder='search movie trailer e.g. Avengers' onChange={ (e) => { setTrailer(e.target.value) } } />
      
      <button onClick={ () => {search()} } className='search-btn'>Search</button>
      </div>
      <div className='display'>
      <ReactPlayer url={trailerURL} controls={true} className='video'  /> 
      </div>
      
    </div>

  )
} 