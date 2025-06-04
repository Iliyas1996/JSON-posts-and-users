import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {loading: false, posts: [], error: ""};
let storedPosts = null;

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  if (storedPosts) {
    return storedPosts;
  }
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  storedPosts = response.data;
  return storedPosts;
});

export const addPost = createAsyncThunk("users/addPost", async newPost => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    newPost
  );
  if (storedPosts) {
    storedPosts = [...storedPosts, response.data];
  }
  return storedPosts;
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        state.error = "";
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.posts = [];
        state.error = action.error.message;
      })
      .addCase(addPost.pending, state => {
        state.loading = true;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.push(action.payload);
        state.error = "";
      })
      .addCase(addPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;
