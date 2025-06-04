import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {loading: false, users: [], error: ""};
let storedUsers = null;

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  if (storedUsers) {
    return storedUsers;
  }
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  storedUsers = response.data;
  return storedUsers;
});

export const addUser = createAsyncThunk("users/addUser", async newUser => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    newUser
  );
  if (storedUsers) {
    storedUsers = [...storedUsers, response.data];
  }
  return storedUsers;
});

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async deletedUser => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users"
    );
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message;
      })

      .addCase(addUser.pending, state => {
        state.loading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
        state.error = "";
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
