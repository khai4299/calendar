import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postSlice from "./slices/post-slice";
import userSlice from "./slices/user-slice";

const rootReducer = combineReducers({
    post: postSlice,
    user: userSlice,
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
