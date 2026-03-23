import type {
  GetPlaylistsQueryParams,
  PlaylistCreationData,
  PlaylistsResponse,
} from '@/entities/playlists';
import { baseApi } from '@/shared/api';

export const playlistApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchPlaylists: build.query<PlaylistsResponse, GetPlaylistsQueryParams>({
      query: (params) => ({ url: '/playlists', params }),
      providesTags: ['playlists'],
    }),
    createPlaylist: build.mutation<PlaylistsResponse, PlaylistCreationData>({
      query: ({ title, description }) => ({
        url: '/playlists',
        method: 'POST',
        body: { data: { type: 'playlists', attributes: { title, description } } },
      }),
      invalidatesTags: ['playlists'],
    }),
    removePlaylist: build.mutation<void, string>({
      query: (playlistId) => ({ url: `/playlists/${playlistId}`, method: 'DELETE' }),
      invalidatesTags: ['playlists'],
    }),
  }),
});

export const {
  useFetchPlaylistsQuery,
  useCreatePlaylistMutation,
  useRemovePlaylistMutation,
} = playlistApi;
