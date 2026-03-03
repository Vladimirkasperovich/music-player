import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ACCESS_TOKEN, BASE_URL } from '@/shared/config';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: { 'API-KEY': import.meta.env.VITE_API_KEY },
    prepareHeaders: (headers) => {
      headers.set('Authorisation', `Bearer ${ACCESS_TOKEN}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
});
