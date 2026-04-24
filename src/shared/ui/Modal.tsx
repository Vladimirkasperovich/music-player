import { type FC, type PropsWithChildren, useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ModalContext } from '@/shared/lib';

export const Modal: FC<PropsWithChildren> = ({ children }) => {
  const { isOpenModal, closeModal } = useContext(ModalContext);
  const backDropRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpenModal]);

  useEffect(() => {
    if (!isOpenModal) return;
    const keyCheck = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', keyCheck);
    return () => window.removeEventListener('keydown', keyCheck);
  }, [closeModal, isOpenModal]);

  const backDropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === backDropRef.current) {
      closeModal();
    }
  };

  return createPortal(
    <dialog
      open={isOpenModal}
      className="fixed inset-0 z-50 w-full border-none bg-transparent"
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={backDropRef}
        onClick={backDropClick}
        className="flex min-h-screen w-full items-center justify-center bg-black/60"
      >
        <div className="animate-modal-in w-full max-w-lg bg-[#141414] p-6 text-white shadow-2xl">
          {children}
        </div>
      </div>
    </dialog>,
    document.getElementById('modal') as HTMLElement,
  );
};
