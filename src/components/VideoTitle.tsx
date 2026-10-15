import { Info, Play } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../utils/appStore";

interface VideoTitleProps {
  title: string;
  overview: string;
  id: number
}

const VideoTitle = ({title, overview}: VideoTitleProps) => {
  const trailerVideo = useSelector((store: RootState) => store.movie?.trailer)

  const navigate = useNavigate()
  return (
    <div className="w-full aspect-video pt-[14%] px-12 md:px-20 absolute text-white bg-linear-to-r from-black/90 via-black/40 to-transparent z-10">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/2">{overview}</p>
        <div className="flex gap-2 mt-2">
            <button onClick={() => navigate(`/watch/${trailerVideo?.key}`)} className="bg-white backdrop-blur-sm px-6 py-2 rounded text-base text-black flex flex-row items-center gap-1 font-semibold cursor-pointer hover:bg-white/80"><Play />Play</button>
            <button className="bg-white/20 hover:bg-white/15 px-4 py-2 rounded text-base text-white flex flex-row items-center gap-1 font-semibold cursor-pointer"><Info />More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle