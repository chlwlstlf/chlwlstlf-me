import React, { type ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

interface ModalMainProps {
  children: ReactNode;
}
const ModalMain = ({ children }: ModalMainProps) => {
  // 포탈 대상
  const modalRoot = document.getElementById("portal");

  useEffect(() => {
    // body 스크롤 잠금
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!modalRoot) return null;

  // children 전체를 포탈로 렌더
  return ReactDOM.createPortal(<>{children}</>, modalRoot);
};

export interface ModalOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick: () => void;
}
export const ModalOverlay = ({ onClick, className = "", style, ...rest }: ModalOverlayProps) => (
  <div
    {...rest}
    onClick={onClick}
    className={`modal-overlay${className ? ` ${className}` : ""}`}
    style={style}
  />
);

export interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
export const ModalContent = ({ children, className = "", style, ...rest }: ModalContentProps) => (
  <div
    {...rest}
    className={`modal-content${className ? ` ${className}` : ""}`}
    style={style}
  >
    {children}
  </div>
);

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  onClose: () => void;
  showCloseButton?: boolean;
}
export const ModalHeader = ({ title, onClose, showCloseButton = true, className = "", ...rest }: ModalHeaderProps) => (
  <div
    {...rest}
    className={`modal-header${className ? ` ${className}` : ""}`}
  >
    {showCloseButton && (
      <button
        className="modal-close-button"
        onClick={onClose}
      >
        ×
      </button>
    )}
    <h1 className="modal-title">{title}</h1>
  </div>
);

const Modal = Object.assign(ModalMain, {
  Overlay: ModalOverlay,
  Content: ModalContent,
  Header: ModalHeader,
});

export default Modal;
