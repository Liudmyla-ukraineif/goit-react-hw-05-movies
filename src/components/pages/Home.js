import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { fetchTrendingMovies } from '../API';
import { Title, MovieLink } from '../pages/Home.styled';


const Home = () => {
  const [ tranding, setTranding ] = useState(null);
  const location = useLocation();


  useEffect(()=>{
    fetchTrendingMovies()
    .then(res=> {
      // console.log(res);
      setTranding(res)})
    .catch(error => console.log(error))

    }, [])

  return (
  <div> 
    <Title>Trending today</Title>
    <ul>
      {tranding?.map(movie => (<li key={movie.id}><MovieLink to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</MovieLink></li>))}
    </ul>
  </div>

  )
}

export default Home;

Home.propType = {
  fetchTrendingMovies: PropTypes.func
}