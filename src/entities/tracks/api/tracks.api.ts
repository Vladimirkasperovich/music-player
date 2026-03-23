import { baseApi } from '@/shared/api';
import type { GetTracksQueryParams, GetTracksResponse } from '@/entities/tracks';

export const tracksApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchTracks: build.query<GetTracksResponse, GetTracksQueryParams>({
      query: (params) => ({ url: '/playlists/tracks', params }),
      providesTags: ['tracks'],
    }),
  }),
});

export const { useFetchTracksQuery } = tracksApi;
