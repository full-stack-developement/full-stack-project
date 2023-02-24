import { Outlet } from "react-router-dom";
import { Background } from "../../components/Background";
import { NavBar } from "../../components/NavBar";

export function VehiclePage(){
    return (
        <>
            <NavBar></NavBar>
            <Background purpleHeight="300px">
                <Outlet></Outlet>
            </Background>
        </>
    )
}