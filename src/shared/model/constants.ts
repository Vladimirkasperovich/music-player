import { ROUTES_PATHS } from '../routes';
import type { NavItem } from './types';
import homeIcon from '../assets/icons/homeIcon.svg';
import yourLibrary from '../assets/icons/libraryIcon.svg';
import createPlaylist from '../assets/icons/createIcon.svg';
import uploadTrack from '../assets/icons/uploadFileIcon.svg';
import allTracks from '../assets/icons/allTracksIcon.svg';
import allPlaylists from '../assets/icons/allPlaylistIcon.svg';

export const NAVIGATION: Readonly<NavItem[]> = [
  { id: 1, label: 'Home', src: ROUTES_PATHS.home, icon: homeIcon },
  { id: 2, label: 'Your Library', src: ROUTES_PATHS.library, icon: yourLibrary },
  {
    id: 3,
    label: 'Create Playlist',
    src: ROUTES_PATHS.createPlaylist,
    icon: createPlaylist,
  },
  { id: 4, label: 'Upload Track', src: ROUTES_PATHS.uploadTrack, icon: uploadTrack },
  { id: 5, label: 'All Tracks', src: ROUTES_PATHS.tracks, icon: allTracks },
  { id: 6, label: 'All Playlist', src: ROUTES_PATHS.playlists, icon: allPlaylists },
];
