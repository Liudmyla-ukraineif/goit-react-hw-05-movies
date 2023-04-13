import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchTrendingMovies } from '../API';
import { MovieLink } from '../pages/Home.styled'


const Home = () => {
  const [ tranding, setTranding ] = useState(null);
  const location = useLocation();


  useEffect(()=>{
    console.log()
    fetchTrendingMovies()
    .then(res=> {
      // console.log(res);
      setTranding(res)})
    .catch(error => console.log(error))

    }, [])

  return (
  <div> 
    <h2>Trending today</h2>
    <ul>
      {tranding?.map(movie => (<li key={movie.id}><MovieLink to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</MovieLink></li>))}
    </ul>
  </div>

  )
}

export default Home;