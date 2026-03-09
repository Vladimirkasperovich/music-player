import { type FC, type ReactElement } from 'react';
interface ModalProps {
  open: boolean;
  children: ReactElement;
}
// TODO need to fix
export const Modal: FC<ModalProps> = ({ children, open }) => {
  return (
    <dialog
      open={open}
      className="border border-red-700 fixed top-[8.5%] inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent"
    >
      <div className="flex min-h-full justify-center p-4 text-center focus:outline-none">
        {children}
      </div>
    </dialog>
  );
};
