import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import { MainContainer } from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";
import type { RootState } from "../utils/appStore";
import GptPage from "./GptPage";

const Browse = () => {
  useNowPlayingMovies();

  const showGptSearch = useSelector(
    (store: RootState) => store.gpt.showGptSearch,
  );

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
