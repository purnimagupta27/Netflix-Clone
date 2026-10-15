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
  isLoading: boolean
}

const initialState: GptState = {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
    isLoading: false
}

const gptSlice = createSlice({
  name: "gpt",
  initialState,
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    addGptMovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
      state.isLoading = false
    },
  },
});

export const { toggleGptSearchView, addGptMovies, setLoading } = gptSlice.actions;

export default gptSlice.reducer;
