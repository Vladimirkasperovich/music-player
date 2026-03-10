import { type FC, type PropsWithChildren } from 'react';
// import { ModalContext } from '@/app/providers/modalContext';

export const Modal: FC<PropsWithChildren> = ({ children }) => {
  // const { isOpenModal } = useContext(ModalContext);

  return (
    <dialog
      open={true}
      className="fixed top-20 right-0 bottom-0 left-0 z-50 flex w-full items-center justify-center border-none bg-transparent p-0 backdrop:bg-black/60 backdrop:backdrop-blur-sm"
    >
      <div className="animate-modal-in max-w-lg min-w-[320px] rounded-xl bg-[#141414] p-6 text-white shadow-2xl">
        {children}
      </div>
    </dialog>
  );
};
