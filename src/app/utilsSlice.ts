import { createSlice } from "@reduxjs/toolkit";

export interface StateTypes {
  clicked: boolean;
}
const initialState: StateTypes = {
  clicked: false,
};
export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    clickButton: (state) => {
      state.clicked = !state.clicked;
    },
  },
});
export const { clickButton } = utilsSlice.actions;
export default utilsSlice.reducer;
