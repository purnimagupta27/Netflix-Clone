import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";
import MovieList from "./MovieList";
import { useEffect } from "react";
import { addGptMovies } from "../utils/gptSlice";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults, isLoading } = useSelector(
    (store: RootState) => store.gpt,
  );


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addGptMovies({movieNames: null, movieResults: null}))
  }, [])

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center py-40">
        <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-400 text-sm font-medium mt-4">
          Finding recommendations for you...
        </p>
      </div>
    );
  }

  if (!movieNames || !movieResults) return (
    <div>
      <h2 className="text-center text-gray-500 text-sm font-semibold py-50">Search for your favourite movies</h2>
    </div>
  );
  
  return (
    <div className="mx-4 sm:mx-8 md:ml-16 md:mr-0 mt-8 md:mt-16">
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
