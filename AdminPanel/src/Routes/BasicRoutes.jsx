import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout";

import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import Queries from "../Pages/Queries";
import Admins from '../Pages/Admins'
import Offers from "../Pages/Offers";
import SuccessStory from "../Pages/SuccessStory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/queries",
        element: <Queries />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/stories",
        element: <SuccessStory />,
      },
   
      {
        path: "/admins",
        element: <Admins />,
      },
    
    ],
  },
]);

export default router