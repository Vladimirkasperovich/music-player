import { createBrowserRouter } from 'react-router';
import { Home } from '@/pages/home/ui/Home.tsx';
import { Playlists } from '@/pages/playlists/ui/Playlists.tsx';
import { Tracks } from '@/pages/tracks/ui/Tracks.tsx';
import { NotFound } from '@/pages/notFound/ui/NotFound.tsx';

export const router = createBrowserRouter([
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
]);
