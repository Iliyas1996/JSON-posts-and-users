import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../users/userSlice";
import MyButton from "../MyButton";

export const UserView = () => {
  const user = useSelector(state => state.user) || {
    loading: false,
    users: [],
    error: "",
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <MyButton to="adduser">Adding a new user</MyButton>
      <h2>List of Users</h2>

      {user.loading && <div>Loading...</div>}

      {!user.loading && user.error && <div>Error: {user.error}</div>}

      {!user.loading && user.users.length > 0 && (
        <ul>
          {user.users.map(u => (
            <li key={u.id}>
              <strong>Name: {u.name}</strong>
              <p>ID: {u.id}</p>
              <p>Username: {u.username}</p>
              <p>Email: {u.email}</p>
              <p>
                Address: {u.address?.street}, {u.address?.suite},{" "}
                {u.address?.city}, {u.address?.zipcode}
              </p>
              <p>Phone: {u.phone}</p>
              <p>Website: {u.website}</p>
              <p>
                Company: {u.company?.name}, {u.company?.catchPhrase},{" "}
                {u.company?.bs}
              </p>
            </li>
          ))}
        </ul>
      )}
      {console.log(user.users)}
    </div>
  );
};
