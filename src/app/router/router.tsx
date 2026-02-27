import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import { APP_ROUTES } from '@/app/router/appRoutes.ts';

const Layout = lazy(() => import('@/app/layouts/Layout.tsx'));
const pages = {
  home: lazy(() => import('@/pages/home')),
  playlists: lazy(() => import('@/pages/playlists')),
  tracks: lazy(() => import('@/pages/tracks')),
  notFound: lazy(() => import('@/pages/notFound')),
  library: lazy(() => import('@/pages/library')),
  createPlaylist: lazy(() => import('@/pages/createPlaylist')),
  uploadTrack: lazy(() => import('@/pages/uploadTrack')),
  profile: lazy(() => import('@/pages/profile')),
};

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: APP_ROUTES.filter((r) => r.page !== 'notFound').map((r) => ({
      path: r.path,
      Component: pages[r.page],
    })),
  },
  {
    path: '*',
    Component: pages.notFound,
  },
]);
