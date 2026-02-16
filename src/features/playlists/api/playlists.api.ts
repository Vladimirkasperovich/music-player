import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const playlistApi = createApi({
  reducerPath: 'fetchPlaylists',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://musicfun.it-incubator.app/api/1.0/' }),
  endpoints: (build) => ({
    fetchPlaylists: build.query({
      query: () => ``,
    }),
  }),
});

export const { useFetchPlaylistsQuery } = playlistApi;
