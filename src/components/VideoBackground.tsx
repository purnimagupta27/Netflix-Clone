import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore"
import useMovieTrailer from "../hooks/useMovieTrailer";

export const VideoBackground = ({id}: {id: number}) => {
  const trailerVideo = useSelector((store: RootState) => store.movie?.trailer)
  useMovieTrailer(id)
  console.log(trailerVideo)

  return (
    <div className="relative w-full aspect-video overflow-hidden bg-black">
      <iframe
        className="absolute inset-0 h-full w-full border-0 scale-110 sm:scale-120 md:scale-135"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&controls=0&rel=0&modestbranding=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
