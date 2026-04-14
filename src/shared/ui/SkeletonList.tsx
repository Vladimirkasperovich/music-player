import { type FC, useMemo } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton.tsx';

interface SkeletonListProps {
  listLength: number;
}

export const SkeletonList: FC<SkeletonListProps> = ({ listLength }) => {
  const skeletonItems = useMemo(
    () => Array.from({ length: listLength }).fill(1),
    [listLength],
  );
  return (
    <ul className="grid grid-cols-1 gap-2 text-white sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {skeletonItems.map((_, index) => (
        <Skeleton key={index} />
      ))}
    </ul>
  );
};
