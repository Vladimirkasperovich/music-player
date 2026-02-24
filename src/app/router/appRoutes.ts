import { type RouteKey, ROUTES_PATHS } from '@/shared/routes';

type AppRoute = {
  path: (typeof ROUTES_PATHS)[RouteKey];
  page: RouteKey;
};
export const APP_ROUTES: AppRoute[] = [
  { path: ROUTES_PATHS.home, page: 'home' },
  { path: ROUTES_PATHS.playlists, page: 'playlists' },
  { path: ROUTES_PATHS.tracks, page: 'tracks' },
  { path: ROUTES_PATHS.library, page: 'library' },
  { path: ROUTES_PATHS.createPlaylist, page: 'createPlaylist' },
  { path: ROUTES_PATHS.uploadTrack, page: 'uploadTrack' },
  { path: ROUTES_PATHS.notFound, page: 'notFound' },
];
