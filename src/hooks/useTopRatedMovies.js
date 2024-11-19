import axios from "axios";
import {options, Top_Rated } from "../utils/constant";
import {getTopRatedMovie } from "../redux/movieSlice";
import {useDispatch} from 'react-redux';

const useTopRatedMovies = async () =>{
    const dispatch = useDispatch();
    try {
      const res = await axios.get(Top_Rated, options);
      dispatch(getTopRatedMovie(res.data.results))
    } catch (error) {
      console.log(error);
    }
  }
  
export default useTopRatedMovies;