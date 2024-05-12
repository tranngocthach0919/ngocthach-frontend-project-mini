import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { store } from "./redux/store";
import "./index.css";
// import App from "./App";
import Sidebar from "./layouts/sidebar.layouts";
import ProductsList from "./pages/products-list/products-list.pages";
import ProductAdd from "./pages/product-add/product-add.pages";
import ProductDetail from "./pages/product-detail/product-detail.pages";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Sidebar />,
    children: [
      {
        index: true,
        element: <ProductsList />
      },
      {
        path: "/product-add",
        element: <ProductAdd />
      },
      {
        path: "/product-detail/:id",
        element: <ProductDetail />
      },
    ]
  }
])

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
