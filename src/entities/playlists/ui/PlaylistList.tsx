import type { FC } from 'react';
import noCover from '@/shared/assets/images/no-cover.png';
import edit from '@/shared/assets/icons/edit.svg';
import remove from '@/shared/assets/icons/remove.svg';
import { LikeButtons } from '@/shared/ui';
import { type PlaylistsDto, useRemovePlaylistMutation } from '@/entities/playlists';

interface PlaylistListProp {
  playlists: PlaylistsDto[];
  ownerId?: string;
}

export const PlaylistList: FC<PlaylistListProp> = ({ playlists, ownerId }) => {
  const [removePlaylist] = useRemovePlaylistMutation();
  return (
    <ul className="grid grid-cols-1 gap-2 text-white sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {playlists.map((playlist) => (
        <li
          key={playlist.id}
          className="w-full rounded-md border border-white/10 p-3 shadow-[0_4px_8px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-white/40 hover:shadow-[0_10px_20px_rgba(0,0,0,0.35)]"
        >
          <img
            src={noCover}
            alt={`playlist cover ${playlist.attributes.title}`}
            className="mb-3 rounded-md object-cover"
            loading="lazy"
          />
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
      ))}
    </ul>
  );
};
