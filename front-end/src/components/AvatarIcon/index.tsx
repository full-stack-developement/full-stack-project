import { Box, Flex } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../contexts/profile.context";
import { IProfile } from "../../interfaces/user.interface";
import { getSpecificUser, getSpecificUserToken } from "../../utils/user.util";

import { Text } from "../Text";
import { AvatarStyled } from "./style";

export interface IAvatarProps {
  colorClass?: "avatarName-grey" | "avatarName-white";
  size : "big" | "small" | "medium"
  comment? : "create" | "list"
  dateComment? : string
  user_id : string
}

const AvatarIcon = (props: IAvatarProps) => {

  const [profileAuth,setProfileAuth] = useState({} as IProfile)

  useEffect(()=>{
    async function getProfile(){
      const response = await getSpecificUser(props.user_id)
      if(response?.message == "success"){
        setProfileAuth(response.data)
      }
    }
    getProfile()
  },[])

  return (
    <>{profileAuth.full_name != undefined ? 
      <Flex alignItems={"flex-end"} gap={"9px"}>
        <AvatarStyled colorClass={props.colorClass} size={props.size}>
          <div className='avatarLetter'>{profileAuth.full_name[0]}</div>
          {props.size == "medium" ? <Text mt="1.5rem" text={profileAuth.full_name} variant="title-card" ></Text> : 
          <span className={props.colorClass}>{profileAuth.full_name}</span>
          }
          {props.comment == "list" &&  
          <>
            <Box mr={"0.2rem"} ml={"0.2rem"} borderRadius={"100%"} backgroundColor={"greyScale.grey4"} width={"4px"} height={"4px"}></Box>
            <Text text={props.dateComment as string} variant="date-comment"></Text>
          </>
          }
        </AvatarStyled>
        {props.size == "big" && <Text text={profileAuth.accountType == "seller" ? "Anunciante" : "Comprador"} variant="info-card"></Text>}
      </Flex>
 : <></>}</>
  );
};

export default AvatarIcon;
