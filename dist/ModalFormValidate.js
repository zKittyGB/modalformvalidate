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
  const isModalClose = props.isModalClose;
  const closeModal = props.closeModal;
  if (isModalClose) {
    return /*#__PURE__*/_react.default.createElement("div", null, props.children, /*#__PURE__*/_react.default.createElement("button", {
      className: "modal-formValidate-closeButton",
      onClick: () => {
        closeModal();
      }
    }, "Close"));
  }
}