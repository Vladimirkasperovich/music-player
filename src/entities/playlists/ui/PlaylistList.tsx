import type { PlaylistDto } from '../model/Playlists.types';
import type { FC } from 'react';
import noCover from '@/shared/assets/images/no-cover.png';
import like from '@/shared/assets/images/inactive-like.svg';
import dislike from '@/shared/assets/images/inactive-dislike.svg';
interface PlaylistListProp {
  playlists: PlaylistDto[];
}
export const PlaylistList: FC<PlaylistListProp> = ({ playlists }) => {
  return (
    <ul className="flex items-center gap-3 flex-wrap text-white">
      {playlists.map((playlist) => (
        <li
          key={playlist.id}
          className="p-2 border border-[#B3B3B3] bg-[#07070780] rounded-[5px]"
        >
          <img
            src={noCover}
            alt={`playlist imag ${playlist.attributes.title}`}
            className="w-full h-[153px] object-cover rounded-md mb-3"
            loading="lazy"
          />
          <span className="font-semibold text-sm block mb-3">
            {playlist.attributes.title}
          </span>
          <span className="font-bold text-xs block  mb-3">{`Made for ${playlist.attributes.user.name}`}</span>
          <span className="font-medium text-xs text-[background: #B3B3B3] block mb-3">
            23 Tracks <span>Created 1 day ago</span>
          </span>
          <div className="flex items-center gap-2">
            <button>
              <img src={like} alt="like" />
            </button>
            <button>
              <img src={dislike} alt="dislike" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
