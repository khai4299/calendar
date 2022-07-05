import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postSlice from "./slices/post-slice";

const rootReducer = combineReducers({
    //characters: characterSlice,
    post: postSlice,
});

export function makeStore() {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
