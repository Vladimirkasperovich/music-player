import { Link } from 'react-router';
import { HASHTAGS } from '../model/HASHTAGS';
import { PlaylistList, useFetchPlaylistsQuery } from '@/entities/playlists';
import { TracksList, useFetchTracksQuery } from '@/entities/tracks';

function Home() {
  const { data: tracksResponse } = useFetchTracksQuery({ pageSize: 10 });
  const { data: playlistsResponse } = useFetchPlaylistsQuery({ pageSize: 10 });
  const playlists = playlistsResponse?.data ?? [];
  const tracks = tracksResponse?.data ?? [];
  return (
    <section className="min-h-screen bg-[linear-gradient(180deg,_#3333A3_5.09%,_#121212_33.4%)] p-[30px]">
      <ul className="mb-8 hidden items-center gap-3 text-center text-white md:flex">
        {HASHTAGS.map((item) => (
          <li
            key={item.id}
            className={` ${item.bg} rounded-[45px] border border-white/10 px-5 py-2 text-[12px] font-medium transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_20px_rgba(51,51,163,0.35)] hover:brightness-110 active:scale-95`}
          >
            <Link to={item.src} className="block">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mb-8">
        <h2 className="mb-6 text-2xl font-semibold text-white">New playlists</h2>
        <PlaylistList playlists={playlists} />
      </div>
      <div className="mb-20">
        <h2 className="mb-6 text-2xl font-semibold text-white">New Tracks</h2>
        <TracksList tracks={tracks} />
      </div>
    </section>
  );
}
export default Home;
