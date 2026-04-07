import type { FC } from 'react';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={`bg-neutral-quaternary animate-pulse ${className}`}
      role="status"
    ></div>
  );
};
