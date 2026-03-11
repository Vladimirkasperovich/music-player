import { createContext } from 'react';

interface ModalContextProps {
  isOpenModal: boolean;
  toggleModal: () => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
  isOpenModal: false,
  toggleModal: () => {},
  closeModal: () => {},
});
