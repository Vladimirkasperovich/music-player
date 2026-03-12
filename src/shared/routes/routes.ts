export const ROUTES_PATHS = {
  home: '/music-player',
  playlists: '/music-player/playlists',
  tracks: '/music-player/tracks',
  library: '/music-player/library',
  createPlaylist: '/music-player/create-playlist',
  uploadTrack: '/music-player/upload-track',
  notFound: '*',
  profile: '/music-player/profile',
} as const;
export type RouteKey = keyof typeof ROUTES_PATHS;
export type RoutePath = (typeof ROUTES_PATHS)[RouteKey];
