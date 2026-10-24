import { useState } from "react";
import { Info, Play } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../utils/appStore";
import MovieModal from "./MovieModal";

interface VideoTitleProps {
  title: string;
  overview: string;
  id: number
}

const VideoTitle = ({title, overview, id}: VideoTitleProps) => {
  const trailerVideo = useSelector((store: RootState) => store.movie?.trailer)
  const [showModal, setShowModal] = useState(false)

  const navigate = useNavigate()
  return (
    <div className="absolute inset-0 z-10 flex flex-col justify-end md:justify-center px-5 pb-4 sm:px-10 sm:pb-6 md:px-20 md:pb-0 text-white bg-linear-to-t md:bg-linear-to-r from-black/95 via-black/40 to-transparent">
        <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold line-clamp-2 max-w-full md:max-w-3xl">{title}</h1>
        <p className="hidden sm:block py-3 md:py-6 text-sm md:text-lg w-full sm:w-3/4 md:w-1/2 line-clamp-2 md:line-clamp-none">{overview}</p>
        <div className="flex flex-wrap gap-2 mt-1 md:mt-2">
            <button onClick={() => navigate(`/watch/${trailerVideo?.key}`)} className="bg-white backdrop-blur-sm px-4 md:px-6 py-1.5 sm:py-2 rounded text-xs sm:text-sm md:text-base text-black flex flex-row items-center gap-1 font-semibold cursor-pointer hover:bg-white/80"><Play size={16} />Play</button>
            <button onClick={() => setShowModal(true)} className="bg-white/20 hover:bg-white/15 px-3 md:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm md:text-base text-white flex flex-row items-center gap-1 font-semibold cursor-pointer"><Info size={16} />More Info</button>
        </div>
        {showModal && (
          <MovieModal movieId={id} onClose={() => setShowModal(false)} />
        )}
    </div>
  )
}

export default VideoTitle
