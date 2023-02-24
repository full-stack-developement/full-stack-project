import { Flex } from "@chakra-ui/react";
import { clientMocked, sellerMocked } from "../../mocks/user.mock";
import { Text } from "../Text";
import { AvatarStyled } from "./style";

export interface IAvatarProps {
  colorClass: "avatarName-grey" | "avatarName-white";
  size : "big" | "small"
}

const AvatarIcon = (props: IAvatarProps) => {
  return (
    <Flex alignItems={"flex-end"} gap={"9px"}>
      <AvatarStyled colorClass={props.colorClass} size={props.size}>
        <div className='avatarLetter'>{sellerMocked.name[0]}</div>
        <span className={props.colorClass}>{sellerMocked.name}</span>
      </AvatarStyled>
      {props.size == "big" && <Text text={sellerMocked.accountType == "seller" ? "Anunciante" : "Comprador"} variant="info-card"></Text>}
    </Flex>
  );
};

export default AvatarIcon;
