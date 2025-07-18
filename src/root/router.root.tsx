import { Layout } from '@components/layout';
import { DetailPage, HomePage, ProductsPage } from '@pages';
import { createBrowserRouter } from 'react-router-dom';

export const rootRouter = createBrowserRouter([
  {
    path: '',
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: 'products',
    element: <ProductsPage />,
    children: [
      {
        path: 'detail/:id',
        element: <DetailPage />,
      },
    ],
  },
]);
