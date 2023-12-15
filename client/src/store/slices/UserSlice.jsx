import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {},
    isLoading: true,
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser(state, action) {
            state.userInfo = action.payload;
            state.isLoading = false;
        },
        deleteUser() {
            // console.log(action.payload)
            return initialState;
        },
    }
})

export default userSlice.reducer;
export const { addUser, deleteUser } = userSlice.actions;

