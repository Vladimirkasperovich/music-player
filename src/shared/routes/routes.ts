export const ROUTES_PATHS = {
  home: '/music-player',
  playlists: '/playlists',
  tracks: '/tracks',
  library: '/library',
  createPlaylist: '/create-playlist',
  uploadTrack: '/upload-track',
  notFound: '*',
  profile: '/profile',
} as const;
export type RouteKey = keyof typeof ROUTES_PATHS;
export type RoutePath = (typeof ROUTES_PATHS)[RouteKey];
