import { createContext } from 'react';

interface ModalContextProps {
  isOpenModal: boolean;
  toggleModal: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
  isOpenModal: false,
  toggleModal: () => {},
});
