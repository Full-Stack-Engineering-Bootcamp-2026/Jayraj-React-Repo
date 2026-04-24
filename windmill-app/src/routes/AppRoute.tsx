import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layout/MainLayout";
import Dashboard from "@/pages/Dashboard";
import Forms from "@/pages/Forms";
import Cards from "@/pages/Cards";
import Charts from "@/pages/Charts";
import Buttons from "@/pages/Buttons";
import Model from "@/pages/Modal";
import Tables from "@/pages/Tables";
import Login from "@/pages/Login";
import CreateAccount from "@/pages/CreateAccount";
import ResetPassword from "@/pages/ResetPassword";
import NotFound from "@/pages/NotFound";
import Blank from "@/pages/Blank";
export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "form",
        element: <Forms />,
      },
      {
        path: "cards",
        element: <Cards />,
      },
      {
        path: "charts",
        element: <Charts />,
      },
      {
        path: "buttons",
        element: <Buttons />,
      },
      {
        path: "modal",
        element: <Model />,
      },
      {
        path: "tables",
        element: <Tables />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "blank",
        element: <Blank />,
      },
    ],
  },
]);
