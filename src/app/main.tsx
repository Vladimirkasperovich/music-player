import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from '@/app/routes/router.tsx';
import './styles/index.css';
import { Provider } from 'react-redux';
import { store } from '@/app/providers/store.ts';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
