import React, { useState } from 'react';
import Header from './Header';
import BackgroundImage from "../assets/homeImg.jpg";
import axios from "axios";
// import { API_END_POINT } from '../utils/constant';
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import { setLoading, setUser } from '../redux/userSlice';
// import { setLoading, setUser } from '../redux/userSlice';
import lockImg from "../assets/lock.png"


const Login = () => {
    const[isLogin, setIsLogin] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLoading = useSelector(store=>store.app.isLoading);

    const loginHandler = ()=>{
        setIsLogin(!isLogin);
    }

    const getInputData = async (e)=>{
        e.preventDefault();
        dispatch(setLoading(true));

        if(isLogin){
            //login
            const user = {email, password};
            try {
                const res = await axios.post("http://localhost:8080/api/v1/user/login", user, {
                    headers:{
                        'Content-Type':'application/json'
                    },
                    withCredentials:true
                });
                console.log(res);
                if(res.data.success){
                    toast.success(res.data.message);
                }

                dispatch(setUser(res.data.user));
                navigate("/browse");

            } catch (error) {
                toast.error(error.response.data.message);
                console.log(error);
            } finally{
                dispatch(setLoading(false));
            }
        }else{
            //register
            dispatch(setLoading(true));
            const user = {fullName, email, password};
            try {
                const res = await axios.post("http://localhost:8080/api/v1/user/register", user, {
                    headers:{
                        'Content-Type':'application/json'
                    },
                    withCredentials:true
                });
                if(res.data.success){
                    toast.success(res.data.message);
                }

                setIsLogin(true);
            } catch (error) {
                toast.error(error.response.data.message);
                console.log(error);
            }finally{
                dispatch(setLoading(false));
            }
        }

        setFullName("");
        setEmail("");
        setPassword("");
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img className='w-[100vw] h-[100vh]' src={BackgroundImage} alt="backImg" />
        </div>
        <form onSubmit={getInputData} action="" className='flex flex-col w-3/12 my-36 absolute bg-black bg-opacity-90 mx-auto items-center justify-center left-0 right-0 p-10'>
            <div className='text-white text-2xl mb-2 font-bold'>{isLogin ? "Log in" : "Sign up"}</div>
            <img src={lockImg} alt="lockImage" className='w-20 h-20' />
            <div className='flex flex-col'>
                {
                    !isLogin && <input value={fullName} onChange={(e)=>setFullName(e.target.value)} type='text' placeholder='Full Name' className='text-white outline-none p-3 my-2 rounded-sm bg-gray-800'/>
                }
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email'placeholder='Email' className='text-white outline-none p-3 my-2 rounded-sm bg-gray-800'/>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Password' className='text-white outline-none p-3 my-2 rounded-sm bg-gray-800'/>
                
                <button type='submit' className='bg-red-600 text-white p-3 mt-7 mb-3'>{`${isLoading? "Loading..." : (isLogin ? "Log in" : "Sign up")}`}</button>
                <p className='text-white'>{isLogin? "New to Netflix?" : "Already have an account?"} <span onClick={loginHandler} className='ml-2 text-blue-700 font-medium cursor-pointer'>{isLogin ? "Sign up":"Log in"}</span></p>
            </div>
        </form>
    </div>
  )
}
export default Login
