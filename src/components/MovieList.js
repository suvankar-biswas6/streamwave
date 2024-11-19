import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title, movies,searchMovie=false}) {
    console.log(movies);
    
  return (
    <div className='px-8 bg-gray-900 h-[100%]'>
        <h1 className={`${searchMovie ? "text-white" : "text-white"} py-2 text-3xl`}>{title}</h1>
        <div className='overflow-x-auto no-scrollbar cursor-pointer flex'>
            <div className='flex items-center'>
                {
                    movies?.map((movie)=>{
                        return(
                            <MovieCard key={movie.id} movieId={movie.id} posterPath={movie.backdrop_path} movieTitle={movie.original_title}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList