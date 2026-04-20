import type { FC } from 'react';
import {
  PlaylistItem,
  type PlaylistsDto,
  useRemovePlaylistMutation,
} from '@/entities/playlists';

interface PlaylistListProp {
  playlists: PlaylistsDto[];
  ownerId: string;
  isLoading?: boolean;
}

export const PlaylistList: FC<PlaylistListProp> = ({ playlists, ownerId }) => {
  const [removePlaylist] = useRemovePlaylistMutation();
  return (
    <ul className="grid grid-cols-1 gap-2 text-white sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {playlists.map((playlist) => (
        <PlaylistItem
          playlist={playlist}
          ownerId={ownerId}
          removePlaylist={removePlaylist}
        />
      ))}
    </ul>
  );
};
