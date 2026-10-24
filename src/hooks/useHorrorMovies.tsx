import { useDispatch, useSelector } from "react-redux";
import { addHorrorMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";
import type { RootState } from "../utils/appStore";

const useHorrorMovies = () => {
  const dispatch = useDispatch();

  const horrorMovies = useSelector(
    (store: RootState) => store.movie?.horrorMovies,
  );

  const listOfMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=27&page=1",
      options,
    );
    const json = await data.json();
    dispatch(addHorrorMovies(json.results));
  };

  useEffect(() => {
    if (!horrorMovies) listOfMovies();
  }, []);
};

export default useHorrorMovies;
