import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";
import MovieList from "./MovieList";
import { useEffect } from "react";
import { addGptMovies } from "../utils/gptSlice";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector(
    (store: RootState) => store.gpt,
  );

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addGptMovies({movieNames: null, movieResults: null}))
  }, [])

  if (!movieNames || !movieResults) return null;
  
  return (
    <div className="ml-16 mt-16">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
