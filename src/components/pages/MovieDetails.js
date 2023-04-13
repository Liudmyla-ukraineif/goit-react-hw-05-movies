import { Suspense, useRef, useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { detailsMovies } from '../API';
import { LinkBack, Section, TitleMovie, TitleDetails, TextDetails, LinkDetails } from '../pages/MovieDetails.styled';

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
      <LinkBack to={backLinkLocationRef.current}>Go back</LinkBack>

      <Section>
        <img onError={()=>{}} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt='poster movie'></img>
        <div>
          <TitleMovie>{title} </TitleMovie>
          <TextDetails>User Score: {Math.round(vote_average * 10)}&#37;</TextDetails>
          <TitleDetails>Overview:</TitleDetails>
          <TextDetails>{overview}</TextDetails>
          <TitleDetails>Genres:</TitleDetails>
          <TextDetails>{genres.map(genre => genre.name).join(', ')}</TextDetails>
        </div>
      </Section>

      <TextDetails>Additional information</TextDetails>
      <ul>
        <li>
          <LinkDetails to='cast'>Cast</LinkDetails>
        </li>
        <li>
          <LinkDetails to='reviews'>Reviews</LinkDetails>
        </li>
      </ul>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet/>
      </Suspense>
      
    </div>
  );
}

export default MovieDetails;