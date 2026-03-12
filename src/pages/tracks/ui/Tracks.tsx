import { useFetchTracksQuery } from '@/entities/tracks';

function Tracks() {
  const { data } = useFetchTracksQuery({});
  console.log(data);
  return (
    <section className="min-h-screen text-center">
      <h1>Tracks</h1>
    </section>
  );
}
export default Tracks;
