import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  chakra,
} from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import theme from "../../theme";

export const NavBar = () => {
  return (
    <chakra.div display="flex" justifyContent="space-between" px={14} py={6}>
      <img src={logo} alt="logo" />
      <Breadcrumb separator="" spacing="22px">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Carros</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Motos</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Leilão</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </chakra.div>
  );
};
