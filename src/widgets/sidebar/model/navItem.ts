import homeIcon from '../icons/homeIcon.svg';
import yourLibrary from '../icons/libraryIcon.svg';
import createPlaylist from '../icons/createIcon.svg';
import uploadTrack from '../icons/uploadFileIcon.svg';
import allTracks from '../icons/allTracksIcon.svg';
import allPlaylists from '../icons/allPlaylistIcon.svg';

interface NavItem {
  id: number;
  label: string;
  src: string;
  icon: string;
}
export const NAVIGATION: Readonly<NavItem[]> = [
  { id: 1, label: 'Home', src: '/', icon: homeIcon },
  { id: 2, label: 'Your Library', src: '#', icon: yourLibrary },
  { id: 3, label: 'Create Playlist', src: '#', icon: createPlaylist },
  { id: 4, label: 'Upload Track', src: '#', icon: uploadTrack },
  { id: 5, label: 'All Tracks', src: '/tracks', icon: allTracks },
  { id: 6, label: 'All Playlist', src: '/playlists', icon: allPlaylists },
];
