import { ModalContext } from '@/shared/lib';
import { type FC, type PropsWithChildren, useCallback, useState } from 'react';

export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = useCallback(() => setIsOpenModal((prev) => !prev), []);
  const closeModal = useCallback(() => setIsOpenModal(false), []);
  return (
    <ModalContext.Provider value={{ isOpenModal, toggleModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
