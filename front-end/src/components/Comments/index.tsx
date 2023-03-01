import { Box } from "@chakra-ui/react";
import { Comment } from "../Comment";
import { CreateComment } from "../CreateComment";
import {Text} from "../Text"

export function Comments(){
    return(
        <>
            <Box zIndex={1} backgroundColor={"greyScale.grey10"} borderRadius={"5px"} width={{phone : "351px",desktopLarge : "752px"}} padding={"1rem"}>
                <Text text="Comentários" variant="title-card"></Text>
                <Comment></Comment>
                <Comment></Comment>
                <Comment></Comment>
                <Comment></Comment>
            </Box>
            <CreateComment></CreateComment>
        </>
    )
}