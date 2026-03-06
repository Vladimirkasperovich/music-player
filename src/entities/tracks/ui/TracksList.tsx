import type { FC } from 'react';
import type { TrackDto } from '../model/Tracks.types';
import noCover from '@/shared/assets/images/no-cover.png';
import { LikeButtons } from '@/shared/ui';

interface TracksListProps {
  tracks: TrackDto[];
}
export const TracksList: FC<TracksListProps> = ({ tracks }) => {
  return (
    <ul className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-3 text-white">
      {tracks.map((track) => (
        <li
          key={track.id}
          className="p-2 border border-white/10 shadow-[0_4px_8px_rgba(0,0,0,0.25)] rounded-md
                     transition-all duration-300 ease-out
                     hover:translate-x-1
                     hover:scale-[1.02]
                   hover:border-white/40
                     hover:shadow-[0_10px_20px_rgba(0,0,0,0.35)] max-w-[120px]"
        >
          <img
            src={noCover}
            alt={`cover ${track.attributes.title}`}
            className="w-[112px] h-[103px] object-cover rounded-md mb-2"
            loading="lazy"
          />
          <span className="font-semibold text-sm block truncate mb-2">
            {track.attributes.title}
          </span>
          <span className="font-medium text-xs text-[#B3B3B3] block mb-2 truncate">
            {track.attributes.user.name}
          </span>
          <LikeButtons />
        </li>
      ))}
    </ul>
  );
};
