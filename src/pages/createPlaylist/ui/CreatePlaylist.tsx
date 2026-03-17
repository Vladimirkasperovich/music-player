import { type SubmitHandler, useForm } from 'react-hook-form';
import {
  type PlaylistCreationData,
  useCreatePlaylistMutation,
} from '@/entities/playlists';
import { toast } from 'react-toastify';
import media from '../icons/media.svg';

const CreatePlaylist = () => {
  const [createPlaylist] = useCreatePlaylistMutation();
  const { register, handleSubmit } = useForm<PlaylistCreationData>({
    defaultValues: { title: '', description: '' },
  });

  const submit: SubmitHandler<PlaylistCreationData> = (data) => {
    createPlaylist(data)
      .unwrap()
      .then(() => {
        toast.success('Added new playlist');
      });
  };
  return (
    <section className="min-h-screen bg-[linear-gradient(180deg,#4B4BB8_0%,#2A2A6A_25%,#121212_60%)] p-7.5">
      <form className="flex flex-col items-center gap-5" onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col items-center gap-2.5">
          <label
            htmlFor="file"
            className="flex h-70 w-70 items-center justify-center rounded-sm border border-white bg-[#000000]"
          >
            <img src={media} alt="media image" className="h-10 w-10 object-cover" />
            <input type="file" id="file" className="hidden" />
          </label>
          <button
            type="button"
            className="h-10 w-full rounded-[45px] bg-neutral-700 text-sm font-semibold text-white transition-all duration-200 ease-in-out hover:bg-neutral-600 focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:outline-none active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Upload Cover Image
          </button>
        </div>

        <label htmlFor="title" className="flex w-1/2 flex-col gap-1 text-[#808080]">
          Playlist title
          <input
            type="text"
            id="title"
            placeholder="Playlist title"
            className="h-10 rounded-sm border border-[#B3B3B3] bg-[#2F2F2F] p-2 text-white placeholder-[#FFFFFF]"
            {...register('title')}
          />
        </label>
        <label htmlFor="description" className="flex w-1/2 flex-col gap-1 text-[#808080]">
          Playlist description
          <textarea
            placeholder="Playlist description"
            id="description"
            className="h-17.5 rounded-sm border border-[#B3B3B3] bg-[#2F2F2F] p-2 text-white placeholder-[#FFFFFF]"
            {...register('description')}
          />
        </label>
        <button type="submit" className="h-10 w-1/2 rounded-sm bg-black">
          CreatePlaylist
        </button>
      </form>
    </section>
  );
};

export default CreatePlaylist;
