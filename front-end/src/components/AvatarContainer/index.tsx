import { Box, Flex } from "@chakra-ui/react";
import { sellerMocked } from "../../mocks/user.mock";
import AvatarIcon from "../AvatarIcon";
import { ModalAnnouncementCreate } from "../ModalAnnouncementCreate";
import { Text } from "../Text";

export function AvatarContainer(){
    return(
        <Flex position={"relative"} justifyContent={"center"}>
            <Box w={{phone : "90%", desktopSmall : "50%"}} h={{phone : "461px",desktopSmall : "406px"}} backgroundColor={"greyScale.grey10"} position={"relative"} p={"2rem"}>
                <AvatarIcon size="big" colorClass="avatarName-white"></AvatarIcon>
                <Text text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quisquam, asperiores sit, repellat consectetur, nam aliquid repudiandae odit vitae autem quidem pariatur unde ipsum sint labore blanditiis voluptatem incidunt ipsam?"} variant="profile-description"></Text>
                <ModalAnnouncementCreate></ModalAnnouncementCreate>
            </Box>
        </Flex>
    )
}