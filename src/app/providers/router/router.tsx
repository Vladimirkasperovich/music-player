import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

const Layout = lazy(() => import('@/app/layouts/Layout.tsx'));
const Home = lazy(() => import('@/pages/home'));
const Playlists = lazy(() => import('@/pages/playlists'));
const Tracks = lazy(() => import('@/pages/tracks'));
const NotFound = lazy(() => import('@/pages/notFound'));

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/playlists',
        Component: Playlists,
      },
      {
        path: '/tracks',
        Component: Tracks,
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]);
