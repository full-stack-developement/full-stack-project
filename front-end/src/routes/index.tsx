import { createBrowserRouter } from "react-router-dom";
import { Vehicle } from "../components/Vehicle";
import { VehiclePage } from "../pages/VehiclePage";
import Home from "../pages/home";
import { Profile } from "../pages/Profile";

export const Route = createBrowserRouter([
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "vehicle",
    element: <VehiclePage></VehiclePage>,
    children: [
      {
        path: ":vehicle_id",
        element: <Vehicle></Vehicle>,
      },
    ],
  },
  {
    path : "/profile",
    element : <Profile></Profile>
  }
]);
