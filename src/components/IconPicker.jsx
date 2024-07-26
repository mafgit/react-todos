import {
  FaBook,
  FaBuilding,
  FaClock,
  FaFile,
  FaFlag,
  FaHospital,
  FaPen,
  FaRocket,
} from "react-icons/fa";
import "../styles/IconPicker.css";

const IconPicker = ({ setIcon }) => {
  const icons = [
    FaRocket,
    FaPen,
    FaBuilding,
    FaBook,
    FaClock,
    FaHospital,
    FaFile,
    FaFlag,
  ];

  return (
    <div className="icon-picker">
      {icons.map((Icon, i) => (
        <Icon onClick={() => setIcon(i)} />
      ))}
    </div>
  );
};

export default IconPicker;
