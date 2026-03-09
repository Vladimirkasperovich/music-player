import { Outlet } from 'react-router';
import { Sidebar } from '@/widgets/sidebar';
import { Header } from '@/widgets/header';
import { useContext } from 'react';
import { Modal } from '@/shared/ui';
import { ModalContext } from '../providers/modalContext';
//TODO need to make a review
const Layout = () => {
  const { isOpenModal, toggleModal } = useContext(ModalContext);
  return (
    <div>
      <button className="h-10 w-full" onClick={toggleModal}>
        Show modal
      </button>
      <div className="max-w-1720 mx-auto flex flex-col">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 relative">
            <Outlet />
            <Modal open={isOpenModal}>
              <div className="w-full max-w-sm">
                <ul className="flex flex-col divide-y rounded-xl border border-gray-200 bg-white shadow-sm">
                  <li className="px-4 py-3 hover:bg-gray-50 transition cursor-pointer flex items-center justify-between">
                    <span className="text-gray-700">Profile settings</span>
                    <span className="text-gray-400 text-sm">→</span>
                  </li>
                  <li className="px-4 py-3 hover:bg-gray-50 transition cursor-pointer flex items-center justify-between">
                    <span className="text-gray-700">Notifications</span>
                    <span className="text-gray-400 text-sm">→</span>
                  </li>
                  <li className="px-4 py-3 hover:bg-gray-50 transition cursor-pointer flex items-center justify-between">
                    <span className="text-gray-700">Security</span>
                    <span className="text-gray-400 text-sm">→</span>
                  </li>
                  <li className="px-4 py-3 hover:bg-gray-50 transition cursor-pointer flex items-center justify-between">
                    <span className="text-gray-700">Billing</span>
                    <span className="text-gray-400 text-sm">→</span>
                  </li>
                  <li className="px-4 py-3 hover:bg-gray-50 transition cursor-pointer flex items-center justify-between">
                    <span className="text-gray-700">Log out</span>
                    <span className="text-gray-400 text-sm">→</span>
                  </li>
                </ul>
              </div>
            </Modal>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
