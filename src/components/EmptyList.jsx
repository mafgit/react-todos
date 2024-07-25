import { FaFile } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

const EmptyList = () => {
  return (
    <div className="empty-list">
      <FaFile className="big-icon" />
      <h1>The list is empty</h1>
      <p>
        <FaCirclePlus className="para-icon" /> Create todos by pressing the plus
        button on top right
      </p>

      <p></p>
    </div>
  );
};

export default EmptyList;
