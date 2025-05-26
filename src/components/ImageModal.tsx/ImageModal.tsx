import Modal from "../Modal/Modal";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ImageModal = ({ isOpen, onClose, children }: ImageModalProps) => {
  if (!isOpen) return null;

  return (
    <Modal>
      <Modal.Overlay onClick={onClose} />
      <Modal.Content style={{ maxWidth: "90vw", maxHeight: "90vh" }}>{children}</Modal.Content>
    </Modal>
  );
};

export default ImageModal;
