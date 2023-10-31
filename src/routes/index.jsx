import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Pricing from "../pages/Pricing";
import MainLayout from "../layouts";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },

    ]

  },


]);
export default routes;
