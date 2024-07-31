import "../styles/Modal.css";
import { AnimatePresence, motion } from "framer-motion";

const Modal = ({ modalOpen, setModalOpen, setAns, closable }) => {
  const imgs = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];

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

        <div className="bg-modal">
          {imgs.map((image) => (
            <img
              key={image}
              src={`/assets/images/${image}`}
              onClick={() => {
                setAns(image);
                setModalOpen(false);
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
