import { ROUTES_PATHS } from '@/shared/routes';
import type { NavItem } from '@/widgets/sidebar/model/Sidebar.types.ts';
import homeIcon from '../icons/homeIcon.svg';
import yourLibrary from '../icons/libraryIcon.svg';
import createPlaylist from '../icons/createIcon.svg';
import uploadTrack from '../icons/uploadFileIcon.svg';
import allTracks from '../icons/allTracksIcon.svg';
import allPlaylists from '../icons/allPlaylistIcon.svg';

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
