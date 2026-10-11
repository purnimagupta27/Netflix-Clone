import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";
import type { RootState } from "../utils/appStore";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector((store: RootState) => store.movie?.nowPlayingMovies)

  const listOfMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options,
    );
    const json = await data.json();
    console.log(json)
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    if(!nowPlayingMovies) listOfMovies();
  }, []);
};

export default useNowPlayingMovies;
