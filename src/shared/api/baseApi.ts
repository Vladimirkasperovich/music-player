import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, BASE_URL } from '@/app/config/env.ts';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('api-key', API_KEY);
      return headers;
    },
  }),
  endpoints: () => ({}),
});
