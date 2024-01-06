// dark mode slice
import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../app/store";

const initialState: boolean = false;

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => !state,
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export const selectDarkMode = (state: RootState) => state.darkMode;

export default darkModeSlice.reducer;
