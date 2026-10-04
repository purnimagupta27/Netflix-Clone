import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";

export const SecondaryContainer = () => {
  const movies = useSelector(
    (store: RootState) => store.movie?.nowPlayingMovies,
  );
  console.log(movies);
  if (!movies) return;

  return (
    <div className="bg-black">
      <div className=" mt-0 md:-mt-40 pl-4 md:pl-12 relative z-20">
        <MovieList movies={movies} title={"Now Playing Movies"} />
        <MovieList movies={movies} title={"Tredning"} />
        <MovieList movies={movies} title={"Popular"} />
        <MovieList movies={movies} title={"Upcoming Movies"} />
        <MovieList movies={movies} title={"Horror"} />
      </div>
    </div>
  );
};
