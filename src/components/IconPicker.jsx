import "../styles/IconPicker.css";
import { useContext } from "react";
import { MainContext } from "../App";

const IconPicker = ({ setIcon, setIconPicker }) => {
  const { icons } = useContext(MainContext);

  return (
    <div className="icon-picker">
      {icons.map((Icon, i) => (
        <div
          className="icon"
          onClick={() => {
            setIcon(i);
            setIconPicker(false);
          }}
          key={i}
        >
          {<Icon />}
        </div>
      ))}
    </div>
  );
};

export default IconPicker;
