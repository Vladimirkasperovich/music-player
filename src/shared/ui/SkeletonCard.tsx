import type { FC } from 'react';

interface SkeletonCardProps {
  variant: 'playlist' | 'track';
}

export const SkeletonCard: FC<SkeletonCardProps> = ({ variant }) => {
  const isTrack = variant === 'track';

  return (
    <li
      className={`animate-pulse rounded-md border border-white/10 ${isTrack ? 'max-w-30 p-2' : 'w-full p-3'} `}
    >
      <div className={`mb-3 aspect-square w-full rounded-md bg-[#2A2A2A]`} />

      <div className="mb-2 h-4 w-3/4 rounded bg-[#2A2A2A]" />

      {variant === 'playlist' && <div className="mb-2 h-3 w-1/2 rounded bg-[#2A2A2A]" />}

      <div className="mb-2 h-3 w-2/3 rounded bg-[#2A2A2A]" />

      <div className="flex gap-2">
        <div className="h-7 w-7 rounded-md bg-[#2A2A2A]" />
        <div className="h-7 w-7 rounded-md bg-[#2A2A2A]" />
      </div>
    </li>
  );
};
