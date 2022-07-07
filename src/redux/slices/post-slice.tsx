import { createSlice } from "@reduxjs/toolkit";
// interface CharacterState {
//     loading: boolean;
//     error: string | null;
//     data: any;
// }

const initialState = {
    loading: false,
    error: null,
    data: null,
};

const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {},
});

// export const {} = postsSlice.actions;
export default postsSlice.reducer;
