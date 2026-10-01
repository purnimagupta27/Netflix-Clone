import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

interface Video {
  id: string;
  key: string;
  name: string;
  type: string;
}

const useMovieTrailer = (id: number) => {
      const dispatch = useDispatch()

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options,
    );
    const json = await data.json();

    const filterData = json.results.filter(
      (video: Video) => video.type === "Trailer",
    );
    const trailer = filterData[0];
    dispatch(addTrailer(trailer))
  };

  useEffect(() => {
    getMovieVideos()
  }, []);
}

export default useMovieTrailer