import { type SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import {
  type PlaylistCreationData,
  type PlaylistFormValues,
  playlistSchema,
  useCreatePlaylistMutation,
} from '@/entities/playlists';
import media from '../icons/media.svg';

const CreatePlaylist = () => {
  const [createPlaylist] = useCreatePlaylistMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, touchedFields },
  } = useForm<PlaylistFormValues>({
    resolver: zodResolver(playlistSchema),
    mode: 'onSubmit',
  });

  const submit: SubmitHandler<PlaylistCreationData> = (data) => {
    createPlaylist(data)
      .unwrap()
      .then(() => {
        toast.success('Added new playlist');
        reset();
      });
  };

  return (
    <section className="min-h-screen bg-[linear-gradient(180deg,#4B4BB8_0%,#2A2A6A_25%,#121212_60%)] p-7.5">
      <form className="flex flex-col items-center gap-5" onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col items-center gap-2.5">
          <label
            htmlFor="file"
            className="flex h-70 w-70 cursor-pointer items-center justify-center rounded-sm border border-white bg-[#000000] transition hover:bg-[#111]"
          >
            <img src={media} alt="media image" className="h-10 w-10 object-cover" />
            <input type="file" id="file" className="hidden" />
          </label>
          <button
            type="button"
            className="h-10 w-full cursor-pointer rounded-[45px] border border-[#404040] bg-[#2F2F2F] text-sm font-semibold text-white transition-all duration-200 hover:bg-[#3a3a3a] focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-[#121212] focus:outline-none active:scale-95"
          >
            Upload Cover Image
          </button>
        </div>

        <div className="w-1/2">
          <label htmlFor="title" className="mb-1 flex flex-col gap-1 text-[#808080]">
            Playlist title
            <input
              type="text"
              id="title"
              placeholder="Playlist title"
              className="h-10 w-full rounded-sm border border-[#B3B3B3] bg-[#2F2F2F] p-2 text-white placeholder-[#FFFFFF] focus:border-transparent focus:ring-2 focus:ring-[#FF38B6] focus:outline-none"
              {...register('title')}
            />
          </label>
          {errors.title && (
            <p className="text-xs font-extralight text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div className="w-1/2">
          <label
            htmlFor="description"
            className="mb-1 flex flex-col gap-1 text-[#808080]"
          >
            Playlist description
            <textarea
              placeholder="Playlist description"
              id="description"
              className="h-17.5 rounded-sm border border-[#B3B3B3] bg-[#2F2F2F] p-2 text-white placeholder-[#FFFFFF] focus:border-transparent focus:ring-2 focus:ring-[#FF38B6] focus:outline-none"
              {...register('description')}
            />
          </label>
          {errors.description && (
            <p className="text-xs font-extralight text-red-500">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="flex w-full items-center justify-between lg:w-1/2">
          <button
            type="button"
            onClick={() => reset()}
            className="h-10 w-30 cursor-pointer rounded-[45px] border border-[#808080] text-sm font-semibold text-[#B3B3B3] transition-all duration-200 hover:bg-[#2F2F2F] focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-[#121212] focus:outline-none active:scale-95"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={!isValid && touchedFields.title && touchedFields.description}
            className="h-10 w-30 cursor-pointer rounded-[45px] bg-[#FF38B6] text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#ff5ec4] hover:shadow-lg focus:ring-2 focus:ring-[#FF38B6] focus:ring-offset-2 focus:ring-offset-[#121212] focus:outline-none active:scale-95 disabled:bg-neutral-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePlaylist;
