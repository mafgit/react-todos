import {
  FaBook,
  FaBuilding,
  FaCar,
  FaClock,
  FaFile,
  FaFlag,
  FaHospital,
  FaPen,
  FaRocket,
} from "react-icons/fa";
import "../styles/IconPicker.css";
import { useContext } from "react";
import { MainContext } from "../App";

const IconPicker = ({ setIcon, setIconPicker }) => {
  const { icons } = useContext(MainContext);

  return (
    <div className="icon-picker">
      {icons.map((Icon, i) => (
        <div className="icon">
          <Icon
            onClick={() => {
              setIcon(i);
              setIconPicker(false);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default IconPicker;
