import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ShopPage from "./pages/ShopPage";
import GalleryPage from "./pages/GalleryPage";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/shop", element: <ShopPage /> },
      { path: "/gallery", element: <GalleryPage /> },
      { path: "/cart", element: <CartPage /> },
    ],
  },
]);

export default router;
