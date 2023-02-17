import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { Button, chakra } from "@chakra-ui/react";
import theme from "../../theme/sc";
import { useState } from "react";
import { MenuProfile } from "../MenuProfile";

export const LoginBar = () => {
  const [clicked, setClicked] = useState(true);

  return (
    <chakra.div
      pl="44px"
      borderLeft="2px solid"
      borderLeftColor={theme.colors.greyScale.grey6}
      height="full"
      display="flex"
      alignItems="center"
      onClick={() => setClicked(false)}
    >
      {clicked ? (
        <Breadcrumb separator="" spacing="22">
          <BreadcrumbItem>
            <BreadcrumbLink>Fazer Login</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button variant="outline">Cadastrar</Button>
          </BreadcrumbItem>
        </Breadcrumb>
      ) : (
        <MenuProfile></MenuProfile>
      )}
    </chakra.div>
  );
};
