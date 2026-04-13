export const Skeleton = () => {
  return (
    <li
      className="w-full animate-pulse rounded-md border border-white/10 p-3"
      aria-busy="true"
      aria-label="Loading playlist"
    >
      <div className="mb-3 h-40 w-full rounded-md bg-gray-700" />

      <div className="mb-3 h-4 w-3/4 rounded bg-gray-700" />
      <div className="mb-3 h-4 w-1/2 rounded bg-gray-700" />
      <div className="mb-3 h-4 w-2/3 rounded bg-gray-700" />

      <div className="flex gap-2">
        <div className="h-7 w-7 rounded-md bg-gray-700" />
        <div className="h-7 w-7 rounded-md bg-gray-700" />
      </div>
    </li>
  );
};
