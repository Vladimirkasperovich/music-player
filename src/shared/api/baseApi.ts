import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ACCESS_TOKEN, BASE_URL, API_KEY } from '@/shared/config';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('API-KEY', API_KEY);
      headers.set('Authorization', `Bearer ${ACCESS_TOKEN}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
});
