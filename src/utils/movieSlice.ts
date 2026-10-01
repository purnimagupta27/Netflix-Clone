import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Movie {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

interface Trailer {
  id: string,
  key: string,
  type: string
}

interface MovieState {
  nowPlayingMovies: Movie[] | null;
  trailer: Trailer[] | null
}

const initialState: MovieState = {
  nowPlayingMovies: null,
  trailer: null
};

const moviesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action: PayloadAction<Movie[]>) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailer: (state, action: PayloadAction<Trailer[]>) => {
      state.trailer = action.payload
    }
  },
});

export const { addNowPlayingMovies, addTrailer } = moviesSlice.actions;

export default moviesSlice.reducer;
