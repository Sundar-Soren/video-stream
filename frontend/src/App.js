import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import VideoPlayer from "./pages/VideoPlayer";
import Sidebar from "./components/Sidebar";

const App = () => {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <Outlet />
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
          element: <Home />,
        },
        {
          path: "/video/:video_id",
          element: <VideoPlayer />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
