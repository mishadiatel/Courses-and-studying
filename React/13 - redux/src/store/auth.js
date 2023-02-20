import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthentificated: false 
}

const authSlice = createSlice({
    name: 'authentification',
    initialState: initialAuthState,
    reducers: {
        login(state){
            state.isAuthentificated = true;
        },
        logout(state){
            state.isAuthentificated = false;
        },
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;