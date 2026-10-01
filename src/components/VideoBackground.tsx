import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore"
import useMovieTrailer from "../hooks/useMovieTrailer";

export const VideoBackground = ({ id }: { id: number }) => {
  const trailerVideo = useSelector((store: RootState) => store.movie?.trailer)
  useMovieTrailer(id)

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
