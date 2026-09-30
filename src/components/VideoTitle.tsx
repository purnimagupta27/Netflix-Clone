import { Info, Play } from "lucide-react";

interface VideoTitleProps {
  title: string;
  overview: string;
}

const VideoTitle = ({title, overview}: VideoTitleProps) => {
    console.log(title, overview)
  return (
    <div className="pt-50 px-20">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-10 text-lg w-1/2">{overview}</p>
        <div className="flex gap-2">
            <button className="bg-red-300 px-6 py-2 rounded text-base text-black flex flex-row items-center gap-1 font-semibold cursor-pointer"><Play />Play</button>
            <button className="bg-zinc-300 px-4 py-2 rounded text-base text-black flex flex-row items-center gap-1 font-semibold cursor-pointer"><Info />More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle