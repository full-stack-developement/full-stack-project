import { Box, Flex } from "@chakra-ui/react";
import AvatarIcon from "../AvatarIcon";
import {Text} from "../Text"

interface ICommentProps{
    content : string
    date : string
}

export function Comment(props : ICommentProps){
    return(
        <Box mt={"1rem"}>
            <AvatarIcon dateComment={props.date} comment={"list"} size="small"></AvatarIcon>
            <Text mt="1rem" variant="car-description" text={props.content}></Text>
        </Box>
    )
}