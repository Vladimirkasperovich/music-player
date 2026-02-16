import { useFetchPlaylistsQuery } from '@/features/playlists/api/playlists.api.ts';

function Playlists() {
  const { data } = useFetchPlaylistsQuery({});

  console.log(data);
  return (
    <section className="text-center">
      <h1>Playlists</h1>
    </section>
  );
}
export default Playlists;
