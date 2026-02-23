import { useFetchPlaylistsQuery } from '@/entities/playlists';

function Playlists() {
  const { data: playlists } = useFetchPlaylistsQuery({});

  console.log(playlists?.data);
  return (
    <section className="text-center">
      <h1>Playlists</h1>
    </section>
  );
}
export default Playlists;
