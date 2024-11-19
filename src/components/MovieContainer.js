import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MovieContainer = () => {
  const movie = useSelector(store=>store.movie);
  
  return (
    <div className='bg-gray-900'>
      <div className='-mt-52 relative z-10'>
        <MovieList title={"Popular Movies"}movies={movie.popularMovie}/>
        <MovieList title={"Now Playing"}movies={movie.nowPlayingMovies}/>
        <MovieList title={"Top Rated Movies"}movies={movie.topRatedMovies}/>
        <MovieList title={"Upcoming Movies"}movies={movie.upcomingMovies}/>
      </div>
    </div>
  )
}

export default MovieContainer