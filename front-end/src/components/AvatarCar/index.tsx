import { Box, Flex } from "@chakra-ui/react";
import AvatarIcon from "../AvatarIcon";
import { Button } from "../Button";
import { Text } from "../Text";

interface IAvatarCarProps{
    size : "small" | "medium" | "big"
}

export function AvatarCar(props : IAvatarCarProps){
    return(
        <Flex flexDirection={"column"} zIndex={1} backgroundColor={"greyScale.grey10"} borderRadius={"5px"} width={{phone : "351px",desktopLarge : "752px"}} padding={"1rem"} position={"relative"} justifyContent={"center"} alignItems="center">
            <AvatarIcon size={props.size} colorClass="avatarName-white"></AvatarIcon>
            <Text textAlign="center" text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quisquam, asperiores sit, repellat consectetur, nam aliquid repudiandae odit vitae autem quidem pariatur unde ipsum sint labore blanditiis voluptatem incidunt ipsam?"} variant="car-description"></Text>
            <Button size="small-auto" text="Ver todos os anúncios" variant="show-profile"></Button>
        </Flex>
    )
}