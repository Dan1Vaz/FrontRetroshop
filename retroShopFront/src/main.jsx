/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./providers/AuthProvider.jsx";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer.jsx";
import { NavbarSearchedProducts } from "./components/NavbarSearchedProducts.jsx";
import SearchProductsPage from "./pages/SearchProductsPage.jsx";
import { MainPage } from "./pages/MainPage.jsx";
import ConfirmacionPassword from "./pages/ConfirmacionPassword.jsx";
import { StatusReservation } from "./pages/StatusReservation.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import { VerificationPage } from "./pages/VerificationPage.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";
import { ReservationsPage } from "./pages/ReservationsPage.jsx";
import { PutUserPage } from "./pages/PutUserPage.jsx";
import { PutProductsPages } from "./pages/PutProductsPages.jsx";
import { ProductsUserPage } from "./pages/ProductsUserPage.jsx";
import CreateReview from "./pages/CreateReview.jsx";
import CreateProduct from "./pages/CreateProduct.jsx";
import Error404 from "./pages/Error404.jsx";
import { DetailedProductPage } from "./pages/DetailedProductPage.jsx";
import { ReservationsSeller } from "./pages/ReservationSeller.jsx";
import SellerProductDetail from "./components/sellerProducts/SellerProductDetail.jsx";
import { DetailedProductSellerPage } from "./pages/DetailedProductSellerPage.jsx";
// import {
//   SearchProductsPage,
//   CreateProduct,
//   LoginPage,
//   MainPage,
//   ProductsUserPage,
//   ProfilePage,
//   PutProductsPages,
//   RegisterPage,
//   ReservationsPage,
//   VerificationPage,
//   StatusReservation,
//   ConfirmacionPassword,
//   CreateReview,
//   PutUserPage,
//   Error404,
// } from "/pages";

const Layout = ({ children, showFooter = true }) => {
  return (
    <div className="">
      {children}
      <Outlet />
      {showFooter && <Footer />}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Navbar />
      </Layout>
    ),
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      { path: "/status/:reservationId", element: <StatusReservation /> },
      {
        path: "/confirmacion/:reservationId/:email",
        element: <ConfirmacionPassword />,
      },
      {
        path: "/review/:productId",
        element: <CreateReview />,
      },
    ],
  },
  {
    path: "/profile",
    element: <Layout />,
    children: [
      // {
      //   path: "/profile",
      //   element: <ProfilePage/>,
      // },

      {
        path: "/profile/login",
        element: <LoginPage />,
      },

      {
        path: "/profile/register",
        element: <RegisterPage />,
      },
      {
        path: "/profile/validation/:verificationCode/:email",
        element: <VerificationPage />,
      },
      {
        path: "/profile/menu",
        element: <ProfilePage />,
      },
      {
        path: "/profile/reservations",
        element: <ReservationsPage />,
      },
      {
        path: "/profile/perfil",
        element: <PutUserPage />,
      },
      {
        path: "/profile",
        element: <CreateProduct />,
      },
      {
        path: "/profile/modify/:productId",
        element: <PutProductsPages />,
      },

      {
        path: "/profile/products/user",
        element: <ProductsUserPage />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
  {
    path: "/profile",
    element: <Layout showFooter={false} />,
    children: [
      {
        path: "/profile/seller",
        element: <ReservationsSeller />,
      },
    ],
  },
  {
    path: "/products",
    element: (
      <Layout>
        <NavbarSearchedProducts />
      </Layout>
    ),
    children: [
      {
        path: "/products",
        element: <SearchProductsPage />,
      },
    ],
  },
  {
    path: "/products",
    element: <Layout />,
    children: [
      {
        path: "/products/product",
        element: <DetailedProductPage />,
      },
      {
        path: "/products/productSeller",
        element: <DetailedProductSellerPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
