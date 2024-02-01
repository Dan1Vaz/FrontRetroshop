import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./providers/AuthProvider.jsx";
import { SearchProvider, useSearch } from "./providers/SearchContext.jsx";
import { MainPage } from "./pages/MainPage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer.jsx";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage.jsx";
import VerificationPage from "./pages/VerificationPage.jsx";
import { NavbarSearchedProducts } from "./components/ProductCard/NavbarSearchedProducts.jsx";
import { SearchProductsPage } from "./pages/SearchProductsPage.jsx";

const Layout = ({ children }) => {
  return (
    <div className="pb-28">
      {children}
      <Outlet />
      <Footer />
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
        path: "/reserva",
        element: <VerStatusReserva />,
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
