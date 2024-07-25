import "../styles/HomePage.css";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import { FaRocket } from "react-icons/fa";

const InvalidPage = () => {
  return (
    <div className="home-page invalid-page main">
      <FaRocket className="big-icon" />
      <h1>Error 404 - Page not found</h1>
      <Link className="btn go-to-home-btn" to="/">
        Go to Home page
      </Link>
    </div>
  );
};

export default InvalidPage;
