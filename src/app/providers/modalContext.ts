import { createContext } from 'react';

interface ModalContextProps {
  isOpenModal: boolean;
  toggleModal: () => void;
}
//TODO need to make a review
export const ModalContext = createContext<ModalContextProps>({
  isOpenModal: false,
  toggleModal: () => {},
});
