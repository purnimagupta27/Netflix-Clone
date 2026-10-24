import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Clock, Play, Star, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { options } from "../utils/constants";

interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string | null;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  runtime: number | null;
  tagline: string | null;
  genres: { id: number; name: string }[];
}

interface MovieModalProps {
  movieId: number;
  onClose: () => void;
}

const MovieModal = ({ movieId, onClose }: MovieModalProps) => {
  const navigate = useNavigate();
  const [details, setDetails] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchDetails = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          { ...options, signal: controller.signal }
        );
        if (!res.ok) throw new Error("Failed to fetch movie details");
        const data = await res.json();
        setDetails(data);
      } catch (err) {
        if ((err as Error).name !== "AbortError") setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
    return () => controller.abort();
  }, [movieId]);

  // Lock scroll and close on Escape while the modal is open.
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  const handleWatch = () => {
    onClose();
    navigate(`/watch/${movieId}`);
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto no-scrollbar rounded-xl bg-[#181818] text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-20 rounded-full bg-black/70 p-2 hover:bg-black/90 cursor-pointer transition"
        >
          <X size={20} />
        </button>

        {loading && (
          <div className="animate-pulse">
            <div className="h-64 w-full bg-white/10" />
            <div className="space-y-4 p-6">
              <div className="h-8 w-2/3 rounded bg-white/10" />
              <div className="h-4 w-1/3 rounded bg-white/10" />
              <div className="h-24 w-full rounded bg-white/10" />
            </div>
          </div>
        )}

        {!loading && error && (
          <div className="flex flex-col items-center justify-center gap-4 p-16 text-center">
            <p className="text-lg font-semibold">Couldn't load movie details.</p>
            <button
              onClick={onClose}
              className="rounded bg-white px-5 py-2 font-semibold text-black hover:bg-white/80 cursor-pointer"
            >
              Close
            </button>
          </div>
        )}

        {!loading && !error && details && (
          <>
            <div className="relative h-64 w-full md:h-80">
              {details.backdrop_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
                  alt={details.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-white/10" />
              )}
              <div className="absolute inset-0 bg-linear-to-t from-[#181818] via-[#181818]/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col gap-3 sm:gap-4">
                <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                  {details.title}
                </h2>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={handleWatch}
                    className="flex flex-row items-center gap-1 rounded bg-white px-6 py-2 font-semibold text-black hover:bg-white/80 cursor-pointer"
                  >
                    <Play size={20} />
                    Play
                  </button>
                  <span className="ml-2 flex items-center gap-1 text-sm text-white/90">
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                    {details.vote_average?.toFixed(1)}
                  </span>
                  {details.runtime ? (
                    <span className="flex items-center gap-1 text-sm text-white/90">
                      <Clock size={16} />
                      {details.runtime} min
                    </span>
                  ) : null}
                  {details.release_date && (
                    <span className="text-sm text-white/90">
                      {new Date(details.release_date).getFullYear()}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8">
              {details.tagline && (
                <p className="mb-4 italic text-white/60">{details.tagline}</p>
              )}

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="md:col-span-2">
                  <p className="leading-relaxed text-white/90">
                    {details.overview || "No overview available."}
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-white/50">Genres: </span>
                    {details.genres?.map((g) => g.name).join(", ") || "N/A"}
                  </p>
                  <p>
                    <span className="text-white/50">Release: </span>
                    {details.release_date || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
};

export default MovieModal;
