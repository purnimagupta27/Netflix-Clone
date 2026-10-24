import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import type { RootState } from "../utils/appStore";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MovieContent = () => {
  const navigate = useNavigate();
  const { movieId } = useParams<{ movieId: string }>();
  const trailerVideo = useSelector((store: RootState) => store.movie?.trailer)
  console.log(trailerVideo)
  useMovieTrailer(Number(movieId))

  if (!movieId) return null;

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden flex flex-col justify-center">
      <button
        onClick={() => navigate("/browse")}
        className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 bg-black/70 hover:bg-black/90 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg cursor-pointer transition duration-200 text-xs sm:text-sm"
      >
        <ArrowLeft size={18} />
        <span className="hidden sm:inline">Back to Browse</span>
        <span className="sm:hidden">Back</span>
      </button>
      <div>
        <iframe
            className="absolute inset-0 w-full h-full scale-100"
            src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&controls=1&playsinline=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
      </div>
    </div>
  );
};

export default MovieContent;
