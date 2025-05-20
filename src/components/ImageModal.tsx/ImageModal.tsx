import Modal from "../Modal/Modal";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function ImageModal({ isOpen, onClose, children }: ImageModalProps) {
  if (!isOpen) return null;

  return (
    <Modal>
      <Modal.Overlay onClick={onClose} />
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
}
