import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";
import type { RootState } from "../utils/appStore";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector(
    (store: RootState) => store.movie?.popularMovies,
  );

  const listOfMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      options,
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    if (!popularMovies) listOfMovies();
  }, []);
};

export default usePopularMovies;
