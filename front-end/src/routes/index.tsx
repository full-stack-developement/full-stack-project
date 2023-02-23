import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";

export default function RoutesMain() {
    return (
        <Routes>
            <Route path="*" element={<Home/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
        </Routes>
    )
}