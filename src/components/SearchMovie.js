import axios from 'axios';
import React, { useState } from 'react'
import { options, Search_Movie_URL } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchMovieDetails } from '../redux/searchSlice';
import { setLoading } from '../redux/userSlice';
import MovieList from './MovieList';

function SearchMovie() {
    const [searchMovie, setSearchMovie] = useState("");
    const dispatch = useDispatch();
    const isLoading = useSelector(store=>store.app.isLoading);
    const {movieName, searchedMovie} = useSelector(store=>store.searchMovie);
    

    const submitHandler = async (e) =>{
    e.preventDefault();
    dispatch(setLoading(true));
    try {

        const res = await axios.get(`${Search_Movie_URL}${searchMovie}`, options);
        console.log(res.data.results);
        const movies = res?.data?.results;
        dispatch(setSearchMovieDetails({searchMovie, movies}));
    } catch (error) {
        console.log(error);
    }finally{
        dispatch(setLoading(false));
    }
    setSearchMovie("");

    }
  return (
    <>
    <div className='w-[100%] h-[100%] flex justify-center pt-[10%]  bg-gray-900'>
        <form onSubmit={submitHandler} className='w-[50%]'>
            <div className='bg-black flex justify-between shadow-md border-2 p-2 border-gray-300 rounded-full w-[100%]'>
                <input value={searchMovie} onChange={(e)=>{setSearchMovie(e.target.value)}} className='w-full outline-none rounded-md text-lg p-2 bg-black text-white' type="text" placeholder='Search Movies'></input>
                <button className='bg-red-800 text-white rounded-full px-4 py-2 hover:opacity-90'>{isLoading ? "Loading..." : "Search"}</button>
            </div>
        </form>
    </div>
    {
        searchedMovie?.length > 0 ? (
            <MovieList title={movieName} searchMovie = {true}movies={searchedMovie}/>
        ) : (<h1 className='mt-10 text-3xl ml-6 font-bold text-red-700'>No movies found.</h1>)
    }
    
    </>
  )
}

export default SearchMovie