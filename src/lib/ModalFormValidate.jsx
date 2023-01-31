import "./ModalFormValidate.css";
import React from "react";
import ReactDOM from "react-dom";

export default function ModalFormValidate(props) {
  const isModalClose = props.isModalClose;
  const closeModal = props.closeModal;
  if (isModalClose) {
    return (
      <div className="modal">
        {props.children}
        <div className="modal-closeButton">
          <button
            className="modal-closeButton-button"
            onClick={() => {
              closeModal();
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}
