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
  trendingMovies: Movie[] | null;
  popularMovies: Movie[] | null;
  upcomingMovies: Movie[] | null;
  horrorMovies: Movie[] | null;
  trailer: Trailer | null
}

const initialState: MovieState = {
  nowPlayingMovies: null,
  trendingMovies: null,
  popularMovies: null,
  upcomingMovies: null,
  horrorMovies: null,
  trailer: null
};

const moviesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action: PayloadAction<Movie[]>) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrendingMovies: (state, action: PayloadAction<Movie[]>) => {
      state.trendingMovies = action.payload;
    },
    addPopularMovies: (state, action: PayloadAction<Movie[]>) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action: PayloadAction<Movie[]>) => {
      state.upcomingMovies = action.payload;
    },
    addHorrorMovies: (state, action: PayloadAction<Movie[]>) => {
      state.horrorMovies = action.payload;
    },
    addTrailer: (state, action: PayloadAction<Trailer>) => {
      state.trailer = action.payload
    }
  },
});

export const {
  addNowPlayingMovies,
  addTrendingMovies,
  addPopularMovies,
  addUpcomingMovies,
  addHorrorMovies,
  addTrailer,
} = moviesSlice.actions;

export default moviesSlice.reducer;
