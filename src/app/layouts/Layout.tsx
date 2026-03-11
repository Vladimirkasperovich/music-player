import { Outlet } from 'react-router';
import { Sidebar } from '@/widgets/sidebar';
import { Header } from '@/widgets/header';
import { Modal, Navigation } from '@/shared/ui';
import { NAVIGATION } from '@/shared/model';

const Layout = () => {
  return (
    <div>
      <div className="mx-auto flex max-w-1720 flex-col">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1">
            <Outlet />

            <Modal>
              <Navigation items={NAVIGATION} />
            </Modal>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
