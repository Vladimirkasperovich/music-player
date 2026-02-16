import { configureStore } from '@reduxjs/toolkit';
import { playlistApi } from '@/features/playlists/api/playlists.api.ts';

export const store = configureStore({
  reducer: {
    [playlistApi.reducerPath]: playlistApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(playlistApi.middleware),
});
