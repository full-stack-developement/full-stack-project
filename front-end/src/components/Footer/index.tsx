import { chakra } from "@chakra-ui/react";
import logoMotorsShop from "../../assets/logoMotorsShop.png";

export const Footer = () => {
  return (
    <chakra.div
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      padding="45px 59px"
      gap="10px"
      backgroundColor="greyScale.grey0"
      color="greyScale.whiteFixed"
      fontFamily="Inter"
      fontSize='font["body-2-400"].size'
      fontWeight='font["body-2-400"].weigth'
    >
      <chakra.img src={logoMotorsShop} alt="logo" />
      <chakra.p>&copy; 2002 - Todos os direitos reservados</chakra.p>
      <chakra.button
        backgroundColor="greyScale.grey1"
        color="greyScale.whiteFixed"
        width="53px"
        height="50px"
        borderRadius="4px"
      >
        ^
      </chakra.button>
    </chakra.div>
  );
};
