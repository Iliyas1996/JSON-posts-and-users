import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MyButton from "./MyButton";
import {PostView} from "./posts/PostView";
import {UserView} from "./users/UserView";
import AddUser from "./users/AddUser";
import AddPost from "./posts/AddPost";

function App() {
  return (
    <Router>
      <div className="App">
        <MyButton to="posts">Posts</MyButton>
        <MyButton to="users">Users</MyButton>

        <Routes>
          <Route path="/posts" element={<PostView />} />
          <Route path="/users" element={<UserView />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/addpost" element={<AddPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
