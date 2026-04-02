import React from "react";
import ReactDOM from "react-dom";
function Model({ onClose }) {
  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className="absolute inset-0 bg-gray-300 opacity-80"></div>
      <div className="absoulte inset-40 p-10 bg-white">Im a model</div>
    </div>,
    document.querySelector(".model-container"),
  );
}

export default Model;
