import { Box, Flex } from "@chakra-ui/react";
import { clientMocked, sellerMocked } from "../../mocks/user.mock";
import { Text } from "../Text";
import { AvatarStyled } from "./style";

export interface IAvatarProps {
  colorClass?: "avatarName-grey" | "avatarName-white";
  size : "big" | "small" | "medium"
  comment? : "create" | "list"
}

const AvatarIcon = (props: IAvatarProps) => {
  return (
    <Flex alignItems={"flex-end"} gap={"9px"}>
      <AvatarStyled colorClass={props.colorClass} size={props.size}>
        <div className='avatarLetter'>{sellerMocked.name[0]}</div>
        {props.size == "medium" ? <Text mt="1.5rem" text={sellerMocked.name} variant="title-card" ></Text> : 
        <span className={props.colorClass}>{sellerMocked.name}</span>
        }
        {props.comment == "list" &&  
        <>
          <Box mr={"0.2rem"} ml={"0.2rem"} borderRadius={"100%"} backgroundColor={"greyScale.grey4"} width={"4px"} height={"4px"}></Box>
          <Text text="ha 2 dias" variant="date-comment"></Text>
        </>
        }
      </AvatarStyled>
      {props.size == "big" && <Text text={sellerMocked.accountType == "seller" ? "Anunciante" : "Comprador"} variant="info-card"></Text>}
    </Flex>
  );
};

export default AvatarIcon;
