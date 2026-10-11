import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { VideoBackground } from "./VideoBackground";

const MovieContent = () => {
  const navigate = useNavigate();
  const { movieId } = useParams<{ movieId: string }>();

  if (!movieId) return null;

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden flex flex-col justify-center">
      <button
        onClick={() => navigate("/browse")}
        className="absolute top-6 left-6 z-50 flex items-center gap-2 bg-black/70 hover:bg-black/90 text-white px-4 py-2 rounded-lg cursor-pointer transition duration-200 text-sm"
      >
        <ArrowLeft size={18} />
        Back to Browse
      </button>
      <VideoBackground id={Number(movieId)} />
    </div>
  );
};

export default MovieContent;
