import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore"
import useMovieTrailer from "../hooks/useMovieTrailer";

export const VideoBackground = ({id}: {id: number}) => {
  const trailerVideo = useSelector((store: RootState) => store.movie?.trailer)
  useMovieTrailer(id)
  //console.log(trailerVideo)

  return (
    <div className="w-full overflow-hidden">
      <iframe
      className="w-full aspect-video scale-135 -mt-16 md:-mt-24"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&controls=0&rel=0&modestbranding=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
