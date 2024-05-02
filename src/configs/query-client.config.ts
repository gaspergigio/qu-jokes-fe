/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryClient } from 'react-query'

import { notifications } from '@mantine/notifications'

/**
 * React-Query Options
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
      staleTime: Infinity,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError: (error: any) => {
        if (error?.code === 'ERR_NETWORK') {
          notifications.show({
            title: 'Error',
            message: 'Something went wrong. Please try again later.',
            color: 'red',
          })
        }
      },
    },
  },
})
