import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import movieReducer from './movieSlice'
import gptReducer from './gptSlice'

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        gpt: gptReducer
    }
})

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export default appStore;