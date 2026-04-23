import type { FC } from 'react';
import {
  PlaylistItem,
  type PlaylistsDto,
  useRemovePlaylistMutation,
} from '@/entities/playlists';
import { SkeletonList } from '@/shared/ui';

interface PlaylistListProp {
  playlists: PlaylistsDto[];
  ownerId: string;
  isLoading?: boolean;
}

export const PlaylistList: FC<PlaylistListProp> = ({ playlists, ownerId, isLoading }) => {
  const [removePlaylist] = useRemovePlaylistMutation();
  return (
    <ul className="grid grid-cols-1 gap-2 text-white sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {isLoading ? (
        <SkeletonList count={10} variant="playlist" />
      ) : (
        playlists.map((playlist) => (
          <PlaylistItem
            key={playlist.id}
            playlist={playlist}
            ownerId={ownerId}
            removePlaylist={removePlaylist}
          />
        ))
      )}
    </ul>
  );
};
