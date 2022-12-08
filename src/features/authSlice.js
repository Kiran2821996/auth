import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginData: false,
};

export const authSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.loginData = action.payload;
    },
    logout:(state,action)=>{
        state.loginData=action.payload;
    }
  },
});

export const {login}= authSlicer.actions;
export default authSlicer.reducer;