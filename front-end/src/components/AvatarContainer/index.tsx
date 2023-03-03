import { Box, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { ProfileContext } from "../../contexts/profile.context";
import { sellerMocked } from "../../mocks/user.mock";
import AvatarIcon from "../AvatarIcon";
import { ModalAnnouncementCreate } from "../ModalAnnouncementCreate";
import { Text } from "../Text";

interface IAvatarContainerProps{
    size : "small" | "medium" | "big"
}

export function AvatarContainer(props : IAvatarContainerProps){

    const {profile} = useContext(ProfileContext)

    return(
        <Flex position={"relative"} justifyContent={"center"}>
            <Box w={{phone : "90%", desktopSmall : "50%"}} backgroundColor={"greyScale.grey10"} position={"relative"} p={"2rem"}>
                <AvatarIcon  size={props.size} colorClass="avatarName-white"></AvatarIcon>
                    <Text text={profile?.description ? profile.description : ""} variant="profile-description"></Text>
                <ModalAnnouncementCreate></ModalAnnouncementCreate>
            </Box>
        </Flex>
    )
}