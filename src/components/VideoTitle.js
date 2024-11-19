import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { CiCircleInfo } from "react-icons/ci";
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setToggle } from '../redux/movieSlice';


const VideoTitle = ({title, overview}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggle = useSelector(store => store.movie.toggle);
  const toggleHandler = ()=>{
    dispatch(setToggle());
  }
  const goToSearch = () =>{
    // toggleHandler;
    navigate("/browse");
  }

  const callBoth = ()=>{
    toggleHandler();
    goToSearch();
  }

  return (
    <div className='w-[vw] aspect-video absolute text-white pt-[17%] p-12'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='w-1/3 mt-4'>{overview}</p>
        <div className='flex mt-8'>
            <button className='font-bold mx-2 flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-70'>
                <FaPlay size="24px"/>
                <span className='ml-2'>Play</span>

            </button>
            <button className='font-bold flex items-center px-6 py-2 bg-gray-600 bg-opacity-50 text-white rounded-md hover:bg-opacity-80' onClick={callBoth}>
                <CiCircleInfo size="24px"/>
                <span className='ml-2'>Watch More</span>
            </button>
        </div>
    </div>
  )
}

export default VideoTitle