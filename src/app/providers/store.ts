import { configureStore } from '@reduxjs/toolkit';
import { playlistApi } from '@/entities/playlists';
import { tracksApi } from '@/entities/tracks';

export const store = configureStore({
  reducer: {
    [playlistApi.reducerPath]: playlistApi.reducer,
    [tracksApi.reducerPath]: tracksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(playlistApi.middleware),
});
