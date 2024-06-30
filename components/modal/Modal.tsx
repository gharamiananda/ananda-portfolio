import React, { ReactNode } from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <button
          className="absolute top-0 right-0 mt-2 mr-2 text-gray-700"
          onClick={onClose}
        >
          &#x2715;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
