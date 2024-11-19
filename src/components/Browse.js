import React, { useEffect } from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import MovieContainer from './MovieContainer';
import MainContainer from './MainContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import SearchMovie from './SearchMovie';

export default function Browse() {
  const user = useSelector(store=>store.app.user);
  const toggle = useSelector(store=>store.movie.toggle);
  const navigate = useNavigate();

  //my custom hooks
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  useEffect(()=>{
    if(!user){
      navigate("/");
    }
  },[])
  
  return (
    <div className='bg-gray-900 h-[100vh]'>
        <Header/>
        <div>
          {
            toggle ? <SearchMovie/> : (
              <>
              <MainContainer/>
              <MovieContainer/>
              </>
            )
          }
        </div>
    </div>
  )
}
