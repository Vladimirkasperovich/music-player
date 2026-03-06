import type { PlaylistDto } from '../model/Playlists.types';
import type { FC } from 'react';
import noCover from '@/shared/assets/images/no-cover.png';
import { LikeButtons } from '@/shared/ui';

interface PlaylistListProp {
  playlists: PlaylistDto[];
}

export const PlaylistList: FC<PlaylistListProp> = ({ playlists }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 text-white">
      {playlists.map((playlist) => (
        <li
          key={playlist.id}
          className="p-3 border border-white/10 shadow-[0_4px_8px_rgba(0,0,0,0.25)] rounded-md
                     transition-all duration-300 ease-out
                     hover:-translate-y-2
                     hover:scale-[1.02]
                   hover:border-white/40
                     hover:shadow-[0_10px_20px_rgba(0,0,0,0.35)]
                     w-full
                     "
        >
          <img
            src={noCover}
            alt={`playlist imag ${playlist.attributes.title}`}
            className="object-cover rounded-md mb-3"
            loading="lazy"
          />
          <span className="font-semibold text-sm block mb-3 truncate">
            {playlist.attributes.title}
          </span>
          <span className="font-bold text-xs block  mb-3 truncate">{`Made for ${playlist.attributes.user.name}`}</span>
          <span className="font-medium text-xs text-[#B3B3B3] block mb-3">
            23 Tracks <span>Created 1 day ago</span>
          </span>
          <LikeButtons />
        </li>
      ))}
    </ul>
  );
};
