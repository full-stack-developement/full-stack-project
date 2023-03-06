import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { Button, chakra } from "@chakra-ui/react";
import { customTheme } from "../../theme";
import { useContext, useEffect, useState } from "react";
import { MenuProfile } from "../MenuProfile";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../../contexts/profile.context";
import { getSpecificUserToken } from "../../utils/user.util";

export const LoginBar = () => {
  const {profile,setProfile} = useContext(ProfileContext)
  const navigate = useNavigate();

  useEffect(()=>{
    async function getProfileToken(){
      const response = await getSpecificUserToken()
      if(response?.message == "success"){
        setProfile(response.data)
      }
    }
    getProfileToken()
  },[])

  return (
    <chakra.div
      pl="44px"
      borderLeft="2px solid"
      borderLeftColor={customTheme.colors.greyScale.grey6}
      height="80px"
      display="flex"
      alignItems="center"
    >
      {profile.full_name != undefined ? <MenuProfile></MenuProfile> : (
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
      )}
    </chakra.div>
  );
};
