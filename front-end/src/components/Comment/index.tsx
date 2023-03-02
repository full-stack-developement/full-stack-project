import { Box, Flex } from "@chakra-ui/react";
import AvatarIcon from "../AvatarIcon";
import {Text} from "../Text"

export function Comment(){
    return(
        <Box mt={"1rem"}>
            <AvatarIcon comment={"list"} size="small"></AvatarIcon>
            <Text mt="1rem" variant="car-description" text="comentario muito produtivo para o desenvolvimento"></Text>
        </Box>
    )
}