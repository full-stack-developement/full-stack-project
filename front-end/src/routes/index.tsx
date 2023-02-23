import { createBrowserRouter } from "react-router-dom";
import { Vehicle } from "../components/Vehicle";
import { VehiclePage } from "../pages/VehiclePage";

export const Route = createBrowserRouter([{

    path : "vehicle",
    element : <VehiclePage></VehiclePage>,
    children : [{
        path : ":vehicle_id",
        element : <Vehicle></Vehicle>
    }]
},
])
