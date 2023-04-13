import { Suspense, useRef, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { detailsMovies } from '../API';

const MovieDetails = () => {
  const [movieDetal, setMovieDetal] = useState([]); //додаткова інформація про фільм по id
  const {movieId} = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/movies");

  useEffect(()=>{
    detailsMovies(movieId)
    .then(res => {

      if (res) {return setMovieDetal(res)}
        return Promise.reject(new Error(`Не вдалося знайти даних по вашому запиту`))
      })
    .catch(err => console.log(err))
  }, [movieId])

  const {poster_path, title, vote_average, overview, genres = []} = movieDetal;

  return (
    

    <div>
      <Link to={backLinkLocationRef.current}>Go back</Link>

      <div>
        <img onError={()=>{}} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt='poster movie'></img>
        <div>
          <h2>{title} </h2>
          <p>User Score: {Math.round(vote_average * 10)}&#37;</p>
          <h3>Overview:</h3>
          <p>{overview}</p>
          <h3>Genres:</h3>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>

      <p>Additional information</p>
      <ul>
        <li>
          <Link to='cast'>Cast</Link>
        </li>
        <li>
          <Link to='reviews'>Reviews</Link>
        </li>
      </ul>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet/>
      </Suspense>
      
    </div>
  );
}

export default MovieDetails;