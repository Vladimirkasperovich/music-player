import { Outlet } from 'react-router';
import { Sidebar } from '@/widgets/sidebar';
import { Header } from '@/widgets/header';

const Layout = () => {
  return (
    <div className="max-w-1720 mx-auto">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
