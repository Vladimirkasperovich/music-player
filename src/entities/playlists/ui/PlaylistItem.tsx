import { type FC, memo } from 'react';
import noCover from '@/shared/assets/images/no-cover.png';
import { LikeButtons } from '@/shared/ui';
import edit from '@/shared/assets/icons/edit.svg';
import remove from '@/shared/assets/icons/remove.svg';
import type { PlaylistsDto } from '@/entities/playlists';

interface PlaylistItemProps {
  playlist: PlaylistsDto;
  ownerId: string;
  removePlaylist: (playlistId: string) => void;
}
export const PlaylistItem: FC<PlaylistItemProps> = memo(
  ({ playlist, ownerId, removePlaylist }) => {
    const image =
      playlist.attributes.images.main.find((i) => i.type === 'medium')?.url ?? noCover;
    return (
      <li className="w-full rounded-md border border-white/10 p-3 shadow-[0_4px_8px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-white/40 hover:shadow-[0_10px_20px_rgba(0,0,0,0.35)]">
        <div className="mb-3 aspect-square w-full overflow-hidden rounded-md">
          <img
            src={image}
            alt={`playlist cover ${playlist.attributes.title}`}
            className="h-full w-full object-cover"
          />
        </div>
        <span className="mb-3 block truncate text-sm font-semibold">
          {playlist.attributes.title}
        </span>
        <span className="mb-3 block truncate text-xs font-bold">{`Made for ${playlist.attributes.user.name}`}</span>
        <span className="mb-3 block text-xs font-medium text-[#B3B3B3]">
          23 Tracks <span>Created 1 day ago</span>
        </span>
        <div className="flex justify-between">
          <LikeButtons />
          {playlist.attributes.user.id === ownerId && (
            <div className="flex items-center gap-2">
              <button className="h-7 w-7">
                <img src={edit} alt="edit playlist" />
              </button>
              <button className="h-7 w-7" onClick={() => removePlaylist(playlist.id)}>
                <img src={remove} alt="remove playlist" />
              </button>
            </div>
          )}
        </div>
      </li>
    );
  },
);
