import { useSelector } from "react-redux"
import type { RootState } from "../utils/appStore"
import VideoTitle from "./VideoTitle"
import { VideoBackground } from "./VideoBackground"

export const MainContainer = () => {
  const movies = useSelector((store: RootState) => store.movie?.nowPlayingMovies)

  if(!movies) return 

  const mainMovie = movies[2]
  //console.log(mainMovie)

  const {original_title, overview, id} = mainMovie
  //console.log(id)

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <VideoBackground id={id}/>
      <VideoTitle title={original_title} overview={overview} id={id} />
    </div>
  )
}
