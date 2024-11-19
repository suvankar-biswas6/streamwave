import React from 'react'
import homeLogo from "../assets/logo5.png"
import {useDispatch, useSelector} from "react-redux"
import axios from 'axios';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast"
import { setToggle } from '../redux/movieSlice';
import { MdOutlineAccountCircle } from "react-icons/md";

export default function Header() {

  const user = useSelector((store)=>store.app.user);
  const toggle = useSelector(store => store.movie.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const logoutHandler = async ()=>{
    try {
      const res = await axios.get("http://localhost:8080/api/v1/user/logout");
      if(res.data.success){
        toast.success(res.data.message);
      }
      console.log(res);
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  const toggleHandler = ()=>{
    dispatch(setToggle());
  }

  return (
    <div className='absolute z-10 flex w-[100%] items-center px-6 justify-between bg-gradient-to-b from-black'>
        <img className='w-64 pl-14' src={homeLogo} alt="netflix-logo" />
        {
          user && (
            <div className='flex items-center'>
                <MdOutlineAccountCircle className='mr-2' size="20px" color='white'/>
                <h1 className='text-lg font-medium text-white pr-5'>{user.fullName}</h1>
                <div className='ml-4'>
                    <button onClick={logoutHandler} className='bg-red-800 text-white px-8 py-2 rounded-3xl hover:opacity-70'>Log out</button>
                    <span className='px-3'></span>
                    <button onClick={toggleHandler} className='bg-red-800 text-white px-4 py-2 ml-2 rounded-3xl hover:opacity-70'>{toggle? "Home" : "Search Movies"}</button>
                </div>
            </div>
          )
        }
    </div>
  )
}
