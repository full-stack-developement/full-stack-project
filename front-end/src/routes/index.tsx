import { createBrowserRouter } from "react-router-dom";
import { Vehicle } from "../components/Vehicle";
import { VehiclePage } from "../pages/VehiclePage";
import Home from "../pages/home";
import { Profile } from "../pages/Profile";
import { RegisterPage } from "../pages/registerPage";
import { LoginPage } from "../pages/loginPage";
import { CommentsProvider } from "../contexts/comments.context";
import { ProtectedRoute } from "./ProtectedRoute";

export const Route = createBrowserRouter([
  {
    path: "/home",
    element: 
    <ProtectedRoute>
      <Home></Home>
    </ProtectedRoute>

  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "vehicle",
    element:
    <ProtectedRoute>
      <VehiclePage></VehiclePage>
    </ProtectedRoute>,
    children: [
      {
        path: ":vehicle_id",
        element:
        <CommentsProvider>
          <Vehicle></Vehicle>
        </CommentsProvider>
      },
    ],
  },
  {
    path: "/profile",
    element: <ProtectedRoute><Profile></Profile></ProtectedRoute>,
  },
]);
