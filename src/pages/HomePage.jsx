import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/HomePage.css";
import {
  faCirclePlus,
  faComputerMouse,
  faDoorOpen,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <div className="home-page main">
      <FontAwesomeIcon className="big-icon" icon={faDoorOpen} />
      <h1>
        <FontAwesomeIcon className="rocket" icon={faRocket} /> Welcome to React
        Todos
      </h1>
      <p>
        <FontAwesomeIcon icon={faComputerMouse} className="para-icon" /> Click
        on a todo list on the sidebar to open it
      </p>
      <p>
        <FontAwesomeIcon icon={faCirclePlus} className="para-icon" /> If there
        is none, you can create a list by clicking Create
      </p>
      <p></p>
    </div>
  );
};

export default HomePage;
