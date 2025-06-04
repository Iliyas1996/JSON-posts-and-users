import {configureStore} from "@reduxjs/toolkit";
import postReducer from "./posts/postSlice";
import userReducer from "./users/userSlice";

const store = configureStore({
  reducer: {
    post: postReducer,
    user: userReducer,
  },
});

export default store;
