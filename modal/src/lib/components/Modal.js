import React from 'react';

export function Modal({ isOpen, content, onClose }) {
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
    zIndex: '1',
  };

  const modalContentStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    zIndex: '1001',
  };

  return (
    <div style={modalBackgroundStyle} onClick={onClose}>
      <div style={modalContentStyle}>
        <h2>{content}</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
