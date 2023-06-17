import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  likeMovie: Array<any>;
  watchLaterMovie: Array<any>;
  likeSeries: Array<any>;
  watchLaterSeries: Array<any>;
};

const initialState: InitialState = {
  likeMovie: [],
  watchLaterMovie: [],
  likeSeries: [],
  watchLaterSeries: [],
};

const firestoreMovieSlice = createSlice({
  name: "FireStoreMovie",
  initialState,
  reducers: {
    setLikeMovie: (state, action: PayloadAction<any>) => {
      state.likeMovie = action.payload;
    },
    setWatchLaterMovie: (state, action: PayloadAction<any>) => {
      state.watchLaterMovie = action.payload;
    },
    setLikeSeries: (state, action: PayloadAction<any>) => {
      state.likeSeries = action.payload;
    },
    setWatchLaterSeries: (state, action: PayloadAction<any>) => {
      state.watchLaterSeries = action.payload;
    },
  },
});

export default firestoreMovieSlice.reducer;
export const { setLikeMovie, setWatchLaterMovie } = firestoreMovieSlice.actions;
