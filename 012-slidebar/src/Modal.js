import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
  return (
    <div className={`modal-overlay show-modal`}>
      <div className="moda-container">
        <h3>modal content</h3>
      </div>
    </div>
  );
};

export default Modal;
