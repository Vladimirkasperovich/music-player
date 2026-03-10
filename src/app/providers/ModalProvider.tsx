import { type FC, type PropsWithChildren, useState } from 'react';
import { ModalContext } from './modalContext.ts';

export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => setIsOpenModal((prev) => !prev);
  return (
    <ModalContext.Provider value={{ isOpenModal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};
