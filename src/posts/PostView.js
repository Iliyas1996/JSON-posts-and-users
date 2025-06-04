import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "./postSlice";
import MyButton from "../MyButton";

export const PostView = () => {
  const post = useSelector(state => state.post) || {
    loading: false,
    posts: [],
    error: "",
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <MyButton to="addpost">Adding a new post</MyButton>
      <h2>List of Posts</h2>
      {post.loading && <div>Loading...</div>}
      {!post.loading && post.error && <div>Error: {post.error}</div>}
      {!post.loading && post.posts.length > 0 && (
        <ul>
          {post.posts.map(p => (
            <li key={p.id}>
              <p>
                <small>
                  Post ID: {p.id}, User ID: {p.userId}
                </small>
              </p>
              <strong>{p.title}</strong>
              <p>{p.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
