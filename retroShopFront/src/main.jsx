import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import { AuthProvider } from './providers/AuthProvider.jsx';
import { MainPage } from "./pages/MainPage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer.jsx";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage.jsx";
import VerificationPage from "./pages/VerificationPage.jsx";
import CreateProduct from "./pages/CreateProduct.jsx";
import PutProductsPages from "./pages/PutProductsPages.jsx";
import ProductsUserPage from "./pages/ProductsUserPage.jsx";

import StatusReservation from "./pages/statusReservation.jsx";
import PutUserPage from "./pages/PutUserPage.jsx";

const Layout = () => {

  
  return (
    <div className="flex flex-col  max-h-screen ">
    <Navbar />
    <div className="flex-1 overflow-y-auto">
      <Outlet />
    </div>
    <Footer />
  </div>
);
};

const Layout2 = () => {

  
  return (
    <div className="flex flex-col max-h-screen  ">
  
    <div className="flex-1 overflow-y-auto place-content-start">
      <Outlet />
    </div>
    <Footer />
  </div>
);
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
     
      {
        path: "/status/:reservationId",
        element: <StatusReservation/>,
      },
      
    
     
    ],
  },
  {
    path: "/profile",
    element: <Layout2 />,
    children: [
      // {
      //   path: "/profile",
      //   element: <ProfilePage/>,
      // },

      {
        path: "/profile/login",
        element: <LoginPage/>,
      },
    
      {
        path: "/profile/register",
        element: <RegisterPage />,
      },
      {
        path: "/profile/perfil",
        element: <PutUserPage/>,
      },
      {
        path: "/profile/validation/:verificationCode/:email",
          element: <VerificationPage/>
       },
      {
        path: "/profile",
          element: <CreateProduct/>
       },
       {
        path: "/profile/modify/:productId",
        element: <PutProductsPages />,
      },
     
      {
        path: "/profile/products/user",
        element: <ProductsUserPage />,
      },
    ]}

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
