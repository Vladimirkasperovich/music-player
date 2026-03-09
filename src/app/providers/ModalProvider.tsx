import { type FC, type ReactNode, useState } from 'react';
import { ModalContext } from './modalContext.ts';

interface ModalProviderProps {
  children: ReactNode;
}
//TODO need to make a review
export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => setIsOpenModal((prev) => !prev);
  return (
    <ModalContext.Provider value={{ isOpenModal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};
