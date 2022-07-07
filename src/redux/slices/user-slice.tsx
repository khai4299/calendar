import { createSlice } from "@reduxjs/toolkit";
// interface CharacterState {
//     loading: boolean;
//     error: string | null;
//     data: any;
// }

const initialState = {
    loading: false,
    error: null,
    user: null,
};

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser(state: any, action: any) {
            state.user = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
