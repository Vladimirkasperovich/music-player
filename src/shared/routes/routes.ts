export const ROUTES_PATHS = {
  home: '/',
  playlists: '/playlists',
  tracks: '/tracks',
  library: '/library',
  createPlaylist: '/create-playlist',
  uploadTrack: '/upload-track',
  notFound: '*',
} as const;
export type RouteKey = keyof typeof ROUTES_PATHS;
export type RoutePath = (typeof ROUTES_PATHS)[RouteKey];
