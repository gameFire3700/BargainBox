import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import AboutUs from "./Components/AboutUs";
import Features from "./Components/Features";
import ContactUs from "./Components/ContactUs";
import Card from "./Components/Card";

// Layout shared across all pages
const Layout = () => (
  <div>
    <Navbar />
    <main className="min-h-screen">
      <Outlet />
    </main>
    <Card/>
    <Footer />
  </div>
);
 
// Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "login", element: <Login /> },
      { path: "aboutus", element: <AboutUs /> },
      { path: "features", element: <Features /> },
      { path: "contact", element: <ContactUs /> },
    ],
    errorElement: (
      <h2 className="text-center text-red-500 mt-10">❌ Page Not Found</h2>
    ),
  },
]);

const App = () => <RouterProvider router={router} />;
export default App;
