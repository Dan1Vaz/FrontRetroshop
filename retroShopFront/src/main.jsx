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

const Layout = () => {

  
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
const Layout2 = () => {

  
  return (
    <div>
   
      <Outlet />
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
      
    
     
    ],
  },
  {
    path: "/profile",
    element: <Layout2 />,
    children: [
      {
        path: "/profile",
        element: <ProfilePage/>,
      },

      {
        path: "/profile/login",
        element: <LoginPage/>,
      },
    
      {
        path: "/profile/register",
        element: <RegisterPage />,
      },
      {
        path: "/profile/validation/:verificationCode/:email",
          element: <VerificationPage/>
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
