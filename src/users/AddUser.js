import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addUser} from "./userSlice";

export default function AddUser() {
  const [userId, setUserId] = useState(11);
  const [newUser, setNewUser] = useState({
    id: userId,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {lat: "", lng: ""},
    },
    phone: "",
    website: "",
    company: {name: "", catchPhrase: "", bs: ""},
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    const {name, value} = e.target;
    setNewUser(prev => {
      const updated = {...prev};

      if (name.startsWith("address.")) {
        const key = name.split(".")[1];
        updated.address[key] = value;
      } else if (name.startsWith("geo.")) {
        const key = name.split(".")[1];
        updated.address.geo[key] = value;
      } else if (name.startsWith("company.")) {
        const key = name.split(".")[1];
        updated.company[key] = value;
      } else {
        updated[name] = value;
      }

      return updated;
    });
  }

  function addedUser() {
    dispatch(addUser(newUser));
    setUserId(userId + 1);
    navigate("/users");
  }

  return (
    <div>
      <h1>Add New User</h1>
      <p>
        Name: <input name="name" value={newUser.name} onChange={handleChange} />
      </p>
      <p>
        Username:{" "}
        <input
          name="username"
          value={newUser.username}
          onChange={handleChange}
        />
      </p>
      <p>
        Email:{" "}
        <input
          name="email"
          type="email"
          value={newUser.email}
          onChange={handleChange}
        />
      </p>
      <p>
        Street:{" "}
        <input
          name="address.street"
          value={newUser.address.street}
          onChange={handleChange}
        />
      </p>
      <p>
        Suite:{" "}
        <input
          name="address.suite"
          value={newUser.address.suite}
          onChange={handleChange}
        />
      </p>
      <p>
        City:{" "}
        <input
          name="address.city"
          value={newUser.address.city}
          onChange={handleChange}
        />
      </p>
      <p>
        Zipcode:{" "}
        <input
          name="address.zipcode"
          value={newUser.address.zipcode}
          onChange={handleChange}
        />
      </p>
      <p>
        Latitude:{" "}
        <input
          name="geo.lat"
          value={newUser.address.geo.lat}
          onChange={handleChange}
        />
      </p>
      <p>
        Longitude:{" "}
        <input
          name="geo.lng"
          value={newUser.address.geo.lng}
          onChange={handleChange}
        />
      </p>
      <p>
        Phone:{" "}
        <input name="phone" value={newUser.phone} onChange={handleChange} />
      </p>
      <p>
        Website:{" "}
        <input name="website" value={newUser.website} onChange={handleChange} />
      </p>
      <p>
        Company Name:{" "}
        <input
          name="company.name"
          value={newUser.company.name}
          onChange={handleChange}
        />
      </p>
      <p>
        Catch Phrase:{" "}
        <input
          name="company.catchPhrase"
          value={newUser.company.catchPhrase}
          onChange={handleChange}
        />
      </p>
      <p>
        BS:{" "}
        <input
          name="company.bs"
          value={newUser.company.bs}
          onChange={handleChange}
        />
      </p>
      <button onClick={addedUser}>Upload</button>
    </div>
  );
}
