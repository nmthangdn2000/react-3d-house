import { Layout } from "@components/layout";
import { HomePage } from "@pages";
import { createBrowserRouter } from "react-router-dom";

export const rootRouter = createBrowserRouter([
  {
    path: "",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
]);
