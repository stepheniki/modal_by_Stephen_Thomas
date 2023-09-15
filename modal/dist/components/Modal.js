"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = Modal;
var _react = _interopRequireDefault(require("react"));
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
  const modalBackgroundStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgb(0 0 0 / 86%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1'
  };
  const modalContentStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    zIndex: '1001'
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: modalBackgroundStyle,
    onClick: onClose
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: modalContentStyle
  }, /*#__PURE__*/_react.default.createElement("h2", null, content), /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClose
  }, "Close")));
}