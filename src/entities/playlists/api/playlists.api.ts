import { baseApi } from '@/shared/api';
import type { GetPlaylistsQueryParams, GetPlaylistsResponse } from '@/entities/playlists';


export const playlistApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchPlaylists: build.query<GetPlaylistsResponse, GetPlaylistsQueryParams>({
      query: (params) => ({ url: '/playlists', params }),
    }),
  }),
});

export const { useFetchPlaylistsQuery } = playlistApi;
