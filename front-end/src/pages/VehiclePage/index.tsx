import { Outlet } from "react-router-dom";
import { Background } from "../../components/Background";
import { NavBar } from "../../components/NavBar";

export function VehiclePage(){
    return (
        <>
            <NavBar></NavBar>
            <Background purpleHeight="60%">
                <Outlet></Outlet>
            </Background>
        </>
    )
}