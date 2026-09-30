import { useEffect, useState } from "react";
import { options } from "../utils/constants";

interface Video {
  id: string;
  key: string;
  name: string;
  type: string;
}

export const VideoBackground = ({ id }: { id: number }) => {
  const [key, setKey] = useState<string | null>(null)

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options,
    );
    const json = await data.json();
    console.log(json.results);

    const filterData = json.results.filter(
      (video: Video) => video.type === "Trailer",
    );
    const trailer = filterData[0];
    console.log(trailer);
    setKey(trailer.key)
  };

  useEffect(() => {
    getMovieVideos()
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
