import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

const Home = lazy(()=>import('../components/pages/Home'));
const Movie = lazy(()=>import('../components/pages/Movies'));
const MovieDetails = lazy(()=>import('../components/pages/MovieDetails'));
const Cast = lazy(()=>import('../components/Cast'));
const Reviews = lazy(()=>import('../components/Reviews'));


export const App = () => {
  return (

    <Routes>
      <Route path={'/'} element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="movies" element={<Movie/>}/>
        <Route path="movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>

  );
};
