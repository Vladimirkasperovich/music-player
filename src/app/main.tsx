import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from '@/app/router/router.tsx';
import './styles/index.css';
import { Provider } from 'react-redux';
import { store } from '@/app/providers/store.ts';
import { ModalProvider } from '@/app/providers/ModalProvider.tsx';
//TODO need to make a review
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  </Provider>,
);
