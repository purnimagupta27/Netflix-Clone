import { createSlice } from "@reduxjs/toolkit";

interface Movie {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

interface GptState {
  showGptSearch: boolean;
  movieNames: string[] | null;
  movieResults: Movie[][] | null;
}

const initialState: GptState = {
    showGptSearch: false,
    movieNames: null,
    movieResults: null
}

const gptSlice = createSlice({
  name: "gpt",
  initialState,
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGptSearchView, addGptMovies } = gptSlice.actions;

export default gptSlice.reducer;
