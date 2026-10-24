import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";
import type { RootState } from "../utils/appStore";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const trendingMovies = useSelector(
    (store: RootState) => store.movie?.trendingMovies,
  );

  const listOfMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?page=1",
      options,
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    if (!trendingMovies) listOfMovies();
  }, []);
};

export default useTrendingMovies;
