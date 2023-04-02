import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import MainLayout from "./layouts/MainLayout";
import Products from "./views/Products";
import Blogs from "./views/Blogs";
import Error from "./views/Error";
import Login from "./views/Login";
import ProductDetail from "./views/ProductDetail";
import Cart from "./views/Cart";
import ProfilePage from "./views/Profile";
import Modal from "./components/Modal";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      { path: "/products/:productId", element: <ProductDetail /> },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "*",
        element: (
          <Error
            title="Page not found!"
            message="Sorry, we couldn’t find the page you’re looking for."
          />
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}> </RouterProvider>;
}

export default App;
