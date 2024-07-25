import { faCirclePlus, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EmptyList = () => {
  return (
    <div className="empty-list">
      <FontAwesomeIcon className="big-icon" icon={faFile} />
      <h1>The list is empty</h1>
      <p>
        <FontAwesomeIcon icon={faCirclePlus} className="para-icon" /> Create
        todos by pressing the plus button on top right
      </p>

      <p></p>
    </div>
  );
};

export default EmptyList;
