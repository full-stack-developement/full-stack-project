import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  chakra,
} from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import theme from "../../theme";
import Avatar from "../Avatar";
import { LoginBar } from "../LoginBar";
import { NavBarButtons } from "../NavBarButtons";

export const NavBar = () => {
  return (
    <chakra.div
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height="80px"
      px={16}
      borderBottom="2px solid"
      borderBottomColor={theme.colors.greyScale.grey6}
    >
      <chakra.img src={logo} alt="logo" height="7" />
      <chakra.div height="full" display="flex" alignItems="center">
        <NavBarButtons />
        <LoginBar />
      </chakra.div>
    </chakra.div>
  );
};