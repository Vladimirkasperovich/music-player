const CreatePlaylist = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#4B4BB8_0%,#2A2A6A_25%,#121212_60%)] p-7.5">
      <form className="flex flex-col items-center gap-5">
        <input type="file" className="h-70 w-70 bg-[#000000]" />
        <label
          htmlFor="playlistTitle"
          className="flex w-1/2 flex-col gap-1 text-[#808080]"
        >
          Playlist title
          <input
            type="text"
            id="playlistTitle"
            placeholder="Playlist title"
            className="h-10 rounded-sm border border-[#B3B3B3] bg-[#2F2F2F] p-2 placeholder-[#FFFFFF]"
          />
        </label>
        <label
          htmlFor="playlistDescription"
          className="flex w-1/2 flex-col gap-1 text-[#808080]"
        >
          Playlist description
          <textarea
            placeholder="Playlist description"
            id="playlistDescription"
            className="h-17.5 rounded-sm border border-[#B3B3B3] bg-[#2F2F2F] p-2 placeholder-[#FFFFFF]"
          />
        </label>
      </form>
    </div>
  );
};

export default CreatePlaylist;
