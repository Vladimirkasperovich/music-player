import { createBrowserRouter } from 'react-router';
import { lazy } from 'react';
import Layout from '@/app/Layout.tsx';

const Home = lazy(() => import('@/pages/home/ui/Home.tsx'));
const Playlists = lazy(() => import('@/pages/playlists/ui/Playlists.tsx'));
const Tracks = lazy(() => import('@/pages/tracks/ui/Tracks.tsx'));
const NotFound = lazy(() => import('@/pages/notFound/ui/NotFound.tsx'));

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
