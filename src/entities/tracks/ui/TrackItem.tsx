import noCover from '@/shared/assets/images/no-cover.png';
import { LikeButtons } from '@/shared/ui';
import type { TrackDto } from '@/entities/tracks/model/types.ts';
import { type FC } from 'react';

interface TrackItemProps {
  track: TrackDto;
}
export const TrackItem: FC<TrackItemProps> = ({ track }) => {
  const image =
    track.attributes.images.main.find((img) => img.type === 'medium')?.url ?? noCover;
  return (
    <li className="max-w-30 cursor-pointer rounded-md border border-white/10 p-2 shadow-[0_4px_8px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:translate-x-1 hover:scale-[1.02] hover:border-white/40 hover:shadow-[0_10px_20px_rgba(0,0,0,0.35)]">
      <div className="mb-2 aspect-square w-full overflow-hidden rounded-md">
        <img
          src={image}
          alt={`cover ${track.attributes.title}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <span className="mb-2 block truncate text-sm font-semibold">
        {track.attributes.title}
      </span>
      <span className="mb-2 block truncate text-xs font-medium text-[#B3B3B3]">
        {track.attributes.user.name}
      </span>
      <LikeButtons />
    </li>
  );
};
