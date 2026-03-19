import { baseQueryWithError } from '@/shared/api';
import type { GetTracksQueryParams, GetTracksResponse } from '@/entities/tracks';

export const tracksApi = baseQueryWithError.injectEndpoints({
  endpoints: (build) => ({
    fetchTracks: build.query<GetTracksResponse, GetTracksQueryParams>({
      query: (params) => ({ url: '/playlists/tracks', params }),
    }),
  }),
});

export const { useFetchTracksQuery } = tracksApi;
