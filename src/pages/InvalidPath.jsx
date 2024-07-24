import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/HomePage.css";
import {
  faCirclePlus,
  faCircleXmark,
  faComputerMouse,
  faDoorOpen,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const InvalidPage = () => {
  return (
    <div className="home-page invalid-page main">
      <FontAwesomeIcon className="big-icon" icon={faCircleXmark} />
      <h1>Error 404 - Page not found</h1>
      <Link className="btn go-to-home-btn" to="/">
        Go to Home page
      </Link>
    </div>
  );
};

export default InvalidPage;
