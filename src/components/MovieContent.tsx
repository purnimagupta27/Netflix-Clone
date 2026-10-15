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
        className="absolute top-6 left-6 z-50 flex items-center gap-2 bg-black/70 hover:bg-black/90 text-white px-4 py-2 rounded-lg cursor-pointer transition duration-200 text-sm"
      >
        <ArrowLeft size={18} />
        Back to Browse
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
