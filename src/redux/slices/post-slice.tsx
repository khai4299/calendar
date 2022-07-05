import { createSlice } from "@reduxjs/toolkit";
// interface CharacterState {
//     loading: boolean;
//     error: string | null;
//     data: any;
// }

const initialState = {
    loading: false,
    error: null,
    data: {
        visible: false,
        dateSetting: 0,
    },
};

const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {
        activePostSetting(state: any, action: any) {
            state.data.visible = action.payload;
        },
        getDataSetting(state: any, action: any) {
            state.data.dateSetting = action.payload;
        },
    },
});

export const { activePostSetting, getDataSetting } = postsSlice.actions;
export default postsSlice.reducer;
