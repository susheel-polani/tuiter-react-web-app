import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";

const tuitsSlice = createSlice({
  name: "tuits",
  initialState: tuits,
  reducers: {
    toggleLike(state, action) {
      const key = action.payload;
      const post = state.find((post) => post._id === key);
      if (post.liked === true) {
        post.liked = false;
        post.likes -= 1;
      } else {
        post.liked = true;
        post.likes += 1;
      }
    },
  },
});

export const { toggleLike } = tuitsSlice.actions;
export default tuitsSlice.reducer;
