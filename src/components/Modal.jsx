import "../styles/Modal.css";
import { AnimatePresence, motion } from "framer-motion";

const Modal = ({ modalOpen, setModalOpen, setAns, closable, onYes }) => {
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
        <div className="modal">
          <h3>Do you really want to delete this todo list?</h3>
          <div className="modal-btns">
            <button
              onClick={() => {
                setAns(false);
                setModalOpen(false);
              }}
            >
              No
            </button>
            <button
              onClick={() => {
                setAns(true);
                setModalOpen(false);
                onYes();
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
