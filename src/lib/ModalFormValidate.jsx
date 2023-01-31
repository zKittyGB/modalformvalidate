import "./ModalFormValidate.css";
import React from "react";
import ReactDOM from "react-dom";

export default function ModalFormValidate(props) {
  const isModalClose = props.isModalClose;
  const closeModal = props.closeModal;
  if (isModalClose) {
    return (
      <div>
        {props.children}
        <button
          className="modal-formValidate-closeButton"
          onClick={() => {
            closeModal();
          }}
        >
          Close
        </button>
      </div>
    );
  }
}
