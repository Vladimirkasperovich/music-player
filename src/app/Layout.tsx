import { Sidebar } from '@/widgets/sidebar/ui/Sidebar.tsx';
import { Header } from '@/widgets/header/ui/Header.tsx';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div className="max-w-1720 mx-auto">
      <Header />
      <div className="flex">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
