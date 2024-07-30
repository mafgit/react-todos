import { useContext } from "react";
import "../styles/Modal.css";
import { AnimatePresence, motion } from "framer-motion";
import { MainContext } from "../App";

const Modal = ({ modalOpen, setModalOpen, setIconIndex, closable }) => {
  const { icons } = useContext(MainContext);

  return (
    <AnimatePresence>
      <motion.div
        variants={{
          closed: { scale: 0, transition: { ease: "easeInOut" } },
          opened: { scale: 1, transition: { ease: "easeInOut" } },
        }}
        exit={{ scale: 0 }}
        animate={modalOpen ? "opened" : "closed"}
        initial="closed"
        className="modal-container"
      >
        <div
          className="modal-bg"
          onClick={() => {
            if (closable) setModalOpen(false);
          }}
        ></div>

        <div className="icon-modal">
          {icons.map((Icon, i) => (
            <div
              className="icon"
              onClick={() => {
                setIconIndex(i);
                setModalOpen(false);
              }}
              key={i}
            >
              {<Icon />}
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
