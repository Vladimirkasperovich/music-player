import { Outlet } from 'react-router';
import { Sidebar } from '@/widgets/sidebar';
import { Header } from '@/widgets/header';

const Layout = () => {
  return (
    <div>
      <div className="max-w-1720 mx-auto flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 ">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
