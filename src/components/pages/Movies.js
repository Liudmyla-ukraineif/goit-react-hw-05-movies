import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { searchMovies } from '../API';
import { Input, Button, LinkSearch } from '../pages/Movies.styled'

const Movie = () => {
  const [movies, setMovies] = useState([]); //фільми що прийшли по запиту
  const [searchParams, setSearchParams] = useSearchParams({});
  const location = useLocation();
  const [newQuery, setNewQuery] = useState(''); //пошук input

  useEffect(()=>{

    searchMovies(searchParams.get('query') ?? '')
    .then(res => setMovies(res))
    .catch(err => console.log(err))
  }, [searchParams])


  const updateQueryString = (event) => {
    // console.log(event.currentTarget.elements)
    event.preventDefault()
    const movieNameValue = event.currentTarget.elements.searchbar.value;
    if(movieNameValue ===""){
      return setSearchParams({})
    }
    setSearchParams({query: movieNameValue})
    setNewQuery('')
  };

  const handleChangeNameMovie = event => {
    // console.log(event.target.value)   
    setNewQuery(event.target.value)
    
    if(event.target.value ===""){
      setSearchParams({})
    } else{
    setSearchParams({query: event.target.value})}
  }

  return (
    <div>

      <form onSubmit={updateQueryString} >
        <Input
          type="text"
          placeholder="Search movies"
          value={newQuery}
          onChange={handleChangeNameMovie}
          id="searchbar"
        />
        <Button type="submit"> Search </Button>
      </form>

      {movies?.map(movie => (
          <ul key={movie.id}>
            <li>
            <LinkSearch to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</LinkSearch>
            </li>
          </ul>
          )
      )}
    </div>
  )
}

export default Movie;