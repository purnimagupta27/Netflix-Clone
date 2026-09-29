
interface VideoTitleProps {
  title: string;
  overview: string;
}

const VideoTitle = ({title, overview}: VideoTitleProps) => {
    console.log(title, overview)
  return (
    <div className="pt-36">
        <h1>{title}</h1>
        <p>{overview}</p>
        <div>
            <button>Play</button>
            <button>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle