import { baseApi } from '@/shared/api';
import type { MeResponse } from '@/features/auth';

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    me: build.query<MeResponse, void>({
      query: () => ({ url: '/auth/me' }),
    }),
  }),
});

export const { useMeQuery } = authApi;
