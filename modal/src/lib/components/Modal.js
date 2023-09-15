import React from 'react';
import './lib/components/Modal.css';

export function Modal({ isOpen, content, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-background" onClick={onClose}>
           <div className="modal-content">
        <h2>{content}</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
