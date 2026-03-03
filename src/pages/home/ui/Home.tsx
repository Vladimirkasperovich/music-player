import { Link } from 'react-router';
import { HASHTAGS } from '../model/HASHTAGS';
import { PlaylistList, useFetchPlaylistsQuery } from '@/entities/playlists';

function Home() {
  const { data } = useFetchPlaylistsQuery({ pageSize: 8 });
  const playlists = data?.data ?? [];

  return (
    <section className="p-[30px] bg-[linear-gradient(180deg,_#3333A3_5.09%,_#121212_33.4%)]">
      <ul className="text-white flex items-center gap-3 text-center mb-8">
        {HASHTAGS.map((item) => (
          <li
            key={item.id}
            className={`
             ${item.bg} rounded-[45px] px-5 py-2 text-[12px] font-medium border border-white/10 transition-all duration-300 ease-out
                            hover:-translate-y-1
                            hover:scale-105
                            hover:brightness-110
                            hover:shadow-[0_8px_20px_rgba(51,51,163,0.35)]
                            active:scale-95
             `}
          >
            <Link to={item.src} className="block">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mb-8">
        <h2 className="font-semibold text-2xl text-white mb-6">New playlists</h2>
        <PlaylistList playlists={playlists} />
      </div>
    </section>
  );
}
export default Home;
