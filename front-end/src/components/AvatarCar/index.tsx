import { Box, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../../contexts/profile.context";
import AvatarIcon from "../AvatarIcon";
import { Button } from "../Button";
import { Text } from "../Text";

interface IAvatarCarProps{
    size : "small" | "medium" | "big"
}

export function AvatarCar(props : IAvatarCarProps){

    const {profile} = useContext(ProfileContext)
    const navigate = useNavigate()

    return(
        <Flex flexDirection={"column"} zIndex={1} backgroundColor={"greyScale.grey10"} borderRadius={"5px"} width={{phone : "351px",desktopLarge : "752px"}} padding={"1rem"} position={"relative"} justifyContent={"center"} alignItems="center">
            <AvatarIcon size={props.size} colorClass="avatarName-white"></AvatarIcon>
            <Text textAlign="center" text={profile?.description ? profile.description : ""} variant="car-description"></Text>
            <Button size="small-auto" onClick={()=>{
                navigate("/profile")
            }} text="Ver todos os anúncios" variant="show-profile"></Button>
        </Flex>
    )
}