import { chakra } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { customTheme } from "../../theme";
import { LoginBar } from "../LoginBar";
import { NavBarButtons } from "../NavBarButtons";

export const NavBar = () => {
  const navigate = useNavigate()

  return (
    <chakra.div
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height="80px"
      px="60px"
      borderBottom="2px solid"
      borderBottomColor={customTheme.colors.greyScale.grey6}
    >
      <chakra.img _hover={{cursor : "pointer"}} onClick={()=>{
        navigate("/home")
      }} src={logo} alt="logo" height="26px" />
      <chakra.div height="full" display="flex" alignItems="center">
        <NavBarButtons />
        <LoginBar />
      </chakra.div>
    </chakra.div>
  );
};
