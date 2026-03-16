import type { FC } from 'react';
import type { TrackDto } from '../model/types.ts';
import noCover from '@/shared/assets/images/no-cover.png';
import { LikeButtons } from '@/shared/ui';

interface TracksListProps {
  tracks: TrackDto[];
}
export const TracksList: FC<TracksListProps> = ({ tracks }) => {
  return (
    <ul className="grid grid-cols-4 gap-3 text-white sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10">
      {tracks.map((track) => (
        <li
          key={track.id}
          className="max-w-[120px] rounded-md border border-white/10 p-2 shadow-[0_4px_8px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:translate-x-1 hover:scale-[1.02] hover:border-white/40 hover:shadow-[0_10px_20px_rgba(0,0,0,0.35)]"
        >
          <img
            src={noCover}
            alt={`cover ${track.attributes.title}`}
            className="mb-2 h-[103px] w-[112px] rounded-md object-cover"
            loading="lazy"
          />
          <span className="mb-2 block truncate text-sm font-semibold">
            {track.attributes.title}
          </span>
          <span className="mb-2 block truncate text-xs font-medium text-[#B3B3B3]">
            {track.attributes.user.name}
          </span>
          <LikeButtons />
        </li>
      ))}
    </ul>
  );
};
