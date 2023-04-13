import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { creditsMovie } from '../components/API';

const Cast = () => {
  const [cast, setCast ] = useState([]); //склад акторів у фільмі
  const { movieId }= useParams();

  useEffect(()=>{
    creditsMovie(movieId)
    .then(res => 
      setCast(res.cast))
    .catch(err => console.log(err))
  }, [movieId]);

  return (
    <div>
      {cast.map(actor => {
        return (
          <div key={actor.id}>
          <img onError={()=>{}} src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt='actor'></img>
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
          </div>);
      })}
    </div>
  )
}

export default Cast;