import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ACCESS_TOKEN, API_KEY, BASE_URL } from '@/shared/config';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import { toast } from 'react-toastify';

const rawBaseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    headers.set('API-KEY', API_KEY);
    headers.set('Authorization', `Bearer ${ACCESS_TOKEN}`);
    return headers;
  },
});
const baseQueryWithErrorHandling: BaseQueryFn = async (args, api, extraOptions) => {
  const data = await rawBaseQuery(args, api, extraOptions);
  if (data.error) {
    const error = data.error.data as any;
    toast.error(error?.message);
  }
  return data;
};

export const baseApi = createApi({
  baseQuery: baseQueryWithErrorHandling,
  tagTypes: ['playlists', 'tracks'],
  endpoints: () => ({}),
});
