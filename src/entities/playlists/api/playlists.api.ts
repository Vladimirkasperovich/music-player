import { baseApi } from '@/shared/api';
import type {
  GetPlaylistsQueryParams,
  PlaylistCreationData,
  PlaylistsResponse,
} from '@/entities/playlists';

export const playlistApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchPlaylists: build.query<PlaylistsResponse, GetPlaylistsQueryParams>({
      query: (params) => ({ url: '/playlists', params }),
    }),
    createPlaylist: build.mutation<PlaylistsResponse, PlaylistCreationData>({
      query: ({ title, description }) => ({
        url: '/playlists',
        method: 'POST',
        body: { data: { type: 'playlists', attributes: { title, description } } },
      }),
    }),
  }),
});

export const { useFetchPlaylistsQuery, useCreatePlaylistMutation } = playlistApi;
