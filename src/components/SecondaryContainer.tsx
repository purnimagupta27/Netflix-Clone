import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";

export const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store: RootState) => store.movie?.nowPlayingMovies,
  );
  const trendingMovies = useSelector(
    (store: RootState) => store.movie?.trendingMovies,
  );
  const popularMovies = useSelector(
    (store: RootState) => store.movie?.popularMovies,
  );
  const upcomingMovies = useSelector(
    (store: RootState) => store.movie?.upcomingMovies,
  );
  const horrorMovies = useSelector(
    (store: RootState) => store.movie?.horrorMovies,
  );

  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-40 relative z-20">
        <MovieList movies={nowPlayingMovies} title={"Now Playing Movies"} />
        <MovieList movies={trendingMovies} title={"Trending"} />
        <MovieList movies={popularMovies} title={"Popular"} />
        <MovieList movies={upcomingMovies} title={"Upcoming Movies"} />
        <MovieList movies={horrorMovies} title={"Horror"} />
      </div>
    </div>
  );
};
