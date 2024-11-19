import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId, bool}) => {
  const trailerMovie = useSelector(store=>store.movie.trailerMovie);
  useMovieById(movieId);

  return (
    <div className='w-[vw] overflow-hidden bg-slate-400'>
        <iframe
        className={`${bool ? "w-[100%]" : "w-screen aspect-video"}`}
        src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=5wvW6okK1wpAIm78&autoplay=1&mute=1`}
        title="YouTube video player"
        frameborder="0"
        allowFullscreen>
        </iframe>
    </div>
  )
}

export default VideoBackground