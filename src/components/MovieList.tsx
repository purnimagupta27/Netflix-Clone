// import { options } from "../utils/constants";
import { useNavigate } from "react-router-dom";

interface Movie {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

const MovieList = ({
  movies,
  title,
}: {
  movies: Movie[] | null;
  title: string;
}) => {
  const navigate = useNavigate();

  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-4 sm:px-6 mb-6 md:mb-10">
      <h2 className="text-base sm:text-xl md:text-3xl py-3 md:py-4 text-white font-semibold">
        {title}
      </h2>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => {
            if (!movie.poster_path) return null;
            return (
              <div className="w-28 sm:w-32 md:w-40 lg:w-48 pr-3 md:pr-4 shrink-0" key={movie.id}>
                <img
                  onClick={() => navigate(`/watch/${movie.id}`)}
                  className="rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
                  alt="Movie Card"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
