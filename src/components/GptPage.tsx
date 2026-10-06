import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import backgroundImage from "../assets/bg_image.png";

const GptPage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="fixed -z-10 top-0 left-0 w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={backgroundImage}
          alt="background"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptPage;