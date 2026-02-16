import type {
  GetPlaylistsQueryParams,
  GetPlaylistsResponse,
} from '@/features/playlists/model/Playlists.types.ts';
import { baseApi } from '@/shared/api/baseApi.ts';

export const playlistApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchPlaylists: build.query<GetPlaylistsResponse, GetPlaylistsQueryParams>({
      query: (arg) => ({
        url: '/playlists',
        params: arg,
      }),
    }),
  }),
});

export const { useFetchPlaylistsQuery } = playlistApi;
