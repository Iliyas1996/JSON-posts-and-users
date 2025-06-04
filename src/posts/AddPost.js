import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addPost} from "../posts/postSlice";

export default function AddPost() {
  const [postId, setPostId] = useState(101);
  const [newPost, setNewPost] = useState({
    userId: "",
    id: postId,
    title: "",
    body: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    const {name, value} = e.target;
    setNewPost(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  function addedPost() {
    dispatch(addPost(newPost));
    setPostId(postId + 1);
    navigate("/posts");
  }

  return (
    <div>
      <h1>Add New Post</h1>
      <p>
        UserId:{" "}
        <input name="userId" value={newPost.userId} onChange={handleChange} />
      </p>
      <p>
        Title:{" "}
        <input name="title" value={newPost.title} onChange={handleChange} />
      </p>
      <p>
        Body: <input name="body" value={newPost.body} onChange={handleChange} />
      </p>
      <button onClick={addedPost}>Upload</button>
    </div>
  );
}
