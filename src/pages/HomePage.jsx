import { FaDoorOpen, FaRocket } from "react-icons/fa";
import "../styles/HomePage.css";
import { FaCirclePlus, FaComputerMouse } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className="home-page main">
      <FaDoorOpen className="big-icon" />
      <h1>
        <FaRocket className="rocket" /> Welcome to React Todos
      </h1>
      <p>
        <FaComputerMouse className="para-icon" /> Click on a todo list on the
        sidebar to open it
      </p>
      <p>
        <FaCirclePlus className="para-icon" /> If there is none, you can create
        a list by clicking Create
      </p>
      <p></p>
    </div>
  );
};

export default HomePage;
