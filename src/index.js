import React from "react";
import ReactDOM from "react-dom/client";
import ModalFormValidate from "./lib/ModalFormValidate";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const modalData = {
  firstName: "",
  lastName: "",
  birth: "",
  dateStart: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
  department: "",
};
const isModalOpen = true;

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <div>
        <ModalFormValidate isModalOpen={isModalOpen} userinfo={modalData} />
      </div>
    </React.StrictMode>
  </Provider>
);
