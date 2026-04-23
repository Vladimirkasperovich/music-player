import type { FC } from 'react';
import type { TrackDto } from '../model/types.ts';
import { TrackItem } from '@/entities/tracks/ui/TrackItem.tsx';
import { SkeletonList } from '@/shared/ui';

interface TracksListProps {
  tracks: TrackDto[];
  isLoading?: boolean;
}
export const TrackList: FC<TracksListProps> = ({ tracks, isLoading }) => {
  return (
    <ul className="grid grid-cols-4 gap-3 text-white sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10">
      {isLoading ? (
        <SkeletonList count={10} variant="track" />
      ) : (
        tracks.map((track) => <TrackItem key={track.id} track={track} />)
      )}
    </ul>
  );
};
