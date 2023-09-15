"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = Modal;
var _react = _interopRequireDefault(require("react"));
require("./lib/components/Modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Modal(_ref) {
  let {
    isOpen,
    content,
    onClose
  } = _ref;
  if (!isOpen) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-background",
    onClick: onClose
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("h2", null, content), /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClose
  }, "Close")));
}
;