import { Box } from "@chakra-ui/react";
import AvatarIcon from "../AvatarIcon";
import {Text} from "../Text"
import { TextArea } from "../TextArea";

export function CreateComment(){
    return(
        <Box mb={"1rem"} zIndex={1} backgroundColor={"greyScale.grey10"} borderRadius={"5px"} width={{phone : "351px",desktopLarge : "752px"}} padding={"1rem"}>
            <AvatarIcon comment={"create"} size="small"></AvatarIcon>
            <TextArea comment={true} placeholder="Digite seu comentario" text=""></TextArea>
        </Box>
    )
}