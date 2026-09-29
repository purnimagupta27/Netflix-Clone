import { useSelector } from "react-redux"
import type { RootState } from "../utils/appStore"
import VideoTitle from "./VideoTitle"
import { VideoBackground } from "./VideoBackground"

export const MainContainer = () => {
  const movies = useSelector((store: RootState) => store.movie?.nowPlayingMovies)

  if(!movies) return 

  const mainMovie = movies[0]
  console.log(mainMovie)

  const {original_title, overview} = mainMovie

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground />
    </div>
  )
}
