import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useHorrorMovies from "../hooks/useHorrorMovies";
import Header from "./Header";
import { MainContainer } from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";
import type { RootState } from "../utils/appStore";
import GptPage from "./GptPage";

const Browse = () => {
  useNowPlayingMovies();
  useTrendingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useHorrorMovies();

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
