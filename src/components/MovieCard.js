import React from 'react'
import { Banner_Url } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { getId, setOpen } from '../redux/movieSlice';

function MovieCard({posterPath, movieId, movieTitle}) {
    const dispatch = useDispatch();

    if(posterPath === null) return null;

    const handleOpen = () =>{
      dispatch(getId(movieId));
      dispatch(setOpen(true));

    }
  return (
    <div className='w-[320px] pr-3' onClick={handleOpen}>
        <img src={`${Banner_Url}/${posterPath}`} alt="moviebanner" className='rounded-md' />
        <span className='text-white'>{movieTitle}</span>
    </div>
  )
}

export default MovieCard