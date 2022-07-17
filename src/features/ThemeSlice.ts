import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setColorMode(state) {
      state.isDark = !state.isDark;
    }
  }
});

export const { setColorMode } = themeSlice.actions;

export default themeSlice.reducer;
