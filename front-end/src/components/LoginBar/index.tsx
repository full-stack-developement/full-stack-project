import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { Button, chakra } from "@chakra-ui/react";
import { customTheme } from "../../theme";
import { useState } from "react";
import { MenuProfile } from "../MenuProfile";
import { useNavigate } from "react-router-dom";

export const LoginBar = () => {
  const [clicked, setClicked] = useState(true);
  const navigate = useNavigate();

  return (
    <chakra.div
      pl="44px"
      borderLeft="2px solid"
      borderLeftColor={customTheme.colors.greyScale.grey6}
      height="80px"
      display="flex"
      alignItems="center"
      onClick={() => setClicked(false)}
    >
      {clicked ? (
        <Breadcrumb separator="" spacing="22">
          <BreadcrumbItem>
            <BreadcrumbLink onClick={() => navigate("/login")}>
              Fazer Login
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button
              variant={"select-type-announcement:disabled"}
              onClick={() => navigate("/register")}
            >
              Cadastrar
            </Button>
          </BreadcrumbItem>
        </Breadcrumb>
      ) : (
        <MenuProfile></MenuProfile>
      )}
    </chakra.div>
  );
};
