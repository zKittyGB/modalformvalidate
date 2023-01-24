"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ModalFormValidate;
require("./ModalFormValidate.css");
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ModalFormValidate(props) {
  const formValidate = Object.values(props)[0];
  const closeModal = Object.values(props)[2];
  //   Moke data for test
  //   const data = {
  //     firstName: "axel",
  //     lastName: "hébert",
  //     birth: "29-01-1990",
  //     dateStart: "29-01-1990",
  //     street: "13 rue de port ldazdazdazdazddzadazda blannche",
  //     city: "Sablé",
  //     state: "alabama",
  //     zipCode: "16740",
  //     department: "sales",
  //   };
  const data = Object.values(props)[1];
  if (formValidate) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-formValidate"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-formValidate-sectionLogo"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-formValidate-sectionText"
    }, /*#__PURE__*/_react.default.createElement("h1", null, "Employee has been created in your tablebase"), /*#__PURE__*/_react.default.createElement("h2", null, "Disclosure summary :"), /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-formValidate-sectionText-summary"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-formValidate-sectionText-summary-elementLeft"
    }, /*#__PURE__*/_react.default.createElement("p", null, "Firstname : ", data.firstName)), /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-formValidate-sectionText-summary-elementRight"
    }, /*#__PURE__*/_react.default.createElement("p", null, "Lastname : ", data.lastName)), /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-formValidate-sectionText-summary-elementLeft"
    }, /*#__PURE__*/_react.default.createElement("p", null, "Birth : ", data.birth)), /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-formValidate-sectionText-summary-elementRight"
    }, /*#__PURE__*/_react.default.createElement("p", null, "Date Start : ", data.dateStart)), /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-formValidate-sectionText-summary-elementLeft"
    }, /*#__PURE__*/_react.default.createElement("p", null, "Street : ", data.street)), /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-formValidate-sectionText-summary-elementRight"
    }, /*#__PURE__*/_react.default.createElement("p", null, "City : ", data.city)), /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-formValidate-sectionText-summary-elementLeft"
    }, /*#__PURE__*/_react.default.createElement("p", null, "Zip Code : ", data.zipCode)), /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-formValidate-sectionText-summary-elementRight"
    }, /*#__PURE__*/_react.default.createElement("p", null, "Department : ", data.department))), /*#__PURE__*/_react.default.createElement("button", {
      className: "modal-formValidate-closeButton",
      onClick: () => {
        closeModal();
      }
    }, "Close")));
  }
}