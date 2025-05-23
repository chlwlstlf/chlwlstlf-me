import React, { type ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

interface ModalMainProps {
  children: ReactNode;
}
const ModalMain = ({ children }: ModalMainProps) => {
  const modalRoot = document.getElementById("portal");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!modalRoot) return null;

  // children 전체를 포탈로 렌더
  return ReactDOM.createPortal(<>{children}</>, modalRoot);
};

interface ModalOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick: () => void;
}
const ModalOverlay = ({ onClick, className = "", style, ...rest }: ModalOverlayProps) => (
  <div
    {...rest}
    onClick={onClick}
    className={`modal-overlay${className ? ` ${className}` : ""}`}
    style={style}
  />
);

interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
const ModalContent = ({ children, className = "", style, ...rest }: ModalContentProps) => (
  <div
    {...rest}
    className={`modal-content${className ? ` ${className}` : ""}`}
    style={style}
  >
    {children}
  </div>
);

interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  onClose: () => void;
}
const ModalHeader = ({ title, onClose, className = "", ...rest }: ModalHeaderProps) => (
  <div
    {...rest}
    className={`modal-header${className ? ` ${className}` : ""}`}
  >
    <h1 className="modal-title">{title}</h1>
  </div>
);

interface ModalCloseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}
const ModalCloseButton = ({ ...rest }: ModalCloseButtonProps) => (
  <button
    type="button"
    aria-label="Close modal"
    {...rest}
  >
    &times;
  </button>
);

const Modal = Object.assign(ModalMain, {
  Overlay: ModalOverlay,
  Content: ModalContent,
  Header: ModalHeader,
  CloseButton: ModalCloseButton,
});

export default Modal;
