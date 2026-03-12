import { type ChangeEvent, useState } from 'react';

const CreatePlaylist = () => {
  const [createPlaylistForm, setCreatePlaylistForm] = useState<{
    title: string;
    description: string;
  }>({
    title: '',
    description: '',
  });

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCreatePlaylistForm((prevState) => ({ ...prevState, title: event.target.value }));
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCreatePlaylistForm((prevState) => ({
      ...prevState,
      description: event.target.value,
    }));
  };

  console.log(createPlaylistForm);
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#4B4BB8_0%,#2A2A6A_25%,#121212_60%)] p-7.5">
      <form className="flex flex-col items-center gap-5">
        <input type="file" className="h-70 w-70 bg-[#000000]" />
        <label htmlFor="title" className="flex w-1/2 flex-col gap-1 text-[#808080]">
          Playlist title
          <input
            type="text"
            id="title"
            placeholder="Playlist title"
            className="h-10 rounded-sm border border-[#B3B3B3] bg-[#2F2F2F] p-2 text-white placeholder-[#FFFFFF]"
            onChange={handleTitleChange}
            value={createPlaylistForm.title}
          />
        </label>
        <label htmlFor="description" className="flex w-1/2 flex-col gap-1 text-[#808080]">
          Playlist description
          <textarea
            placeholder="Playlist description"
            id="description"
            className="h-17.5 rounded-sm border border-[#B3B3B3] bg-[#2F2F2F] p-2 text-white placeholder-[#FFFFFF]"
            value={createPlaylistForm.description}
            onChange={handleDescriptionChange}
          />
        </label>
      </form>
    </div>
  );
};

export default CreatePlaylist;
