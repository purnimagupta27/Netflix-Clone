import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Movie {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

interface MovieState {
  nowPlayingMovies: Movie[] | null;
}

const initialState: MovieState = {
  nowPlayingMovies: null,
};

const moviesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action: PayloadAction<Movie[]>) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
