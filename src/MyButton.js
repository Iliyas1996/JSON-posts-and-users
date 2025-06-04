import {Link} from "react-router-dom";

const MyButton = ({to, children}) => {
  const label = children || (to === "" ? "home" : to);
  const path = `/${to}`;

  return (
    <Link to={path}>
      <button className="my-button">Take me to {label}</button>
    </Link>
  );
};

export default MyButton;
