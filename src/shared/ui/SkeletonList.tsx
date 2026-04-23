import { type FC } from 'react';
import { SkeletonCard } from '@/shared/ui/SkeletonCard.tsx';

interface SkeletonListProps {
  count: number;
  variant: 'playlist' | 'track';
}

export const SkeletonList: FC<SkeletonListProps> = ({ count, variant }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} variant={variant} />
      ))}
    </>
  );
};
