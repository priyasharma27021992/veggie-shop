import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button } from "react-bootstrap";
import "./Modal.css";

type ModalProps = {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
} & PropsWithChildren;

const Modal: FC<ModalProps> = ({ isOpen, hasCloseBtn, onClose, children }) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modalElement = modalRef.current;
    console.log("isModalOpen", isModalOpen, "isOpen", isOpen);
    if (modalElement) {
      if (isModalOpen) modalElement.showModal();
      else modalElement.close();
    }
  }, [isModalOpen, isOpen]);

  const handleCloseModal = () => {
    onClose?.();
    setModalOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") handleCloseModal();
  };
  console.log("isOpen", isOpen);
  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown} className="modal">
      {hasCloseBtn && <Button onClick={handleCloseModal}>Close</Button>}
      {children}
    </dialog>
  );
};

export { Modal };
