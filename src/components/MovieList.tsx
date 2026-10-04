interface Movie {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

const MovieList = ({ movies, title }: { movies: Movie[]; title: string }) => {
  return (
    <div className="px-6 mb-10">
      <h2 className="text-lg md:text-3xl py-4 text-white font-semibold">{title}</h2>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <div className="w-36 md:w-48 pr-4" key={movie.id}>
              <img 
              className="rounded-sm cursor-pointer"
              alt="Movie Card" 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
