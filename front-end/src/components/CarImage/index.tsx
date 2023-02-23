import { Box } from "@chakra-ui/react";
import { StyledDiv } from "./style"

export interface ICardImageProps{
    image : string;
    background? : boolean
    width? : string;
    height?:string;
    galleryImage : boolean
}

export function CarImage(props : ICardImageProps){
    return (
        props.galleryImage ? 
        <Box borderRadius={"5px"} width={{phone : "90px",desktopLarge : "108px"}} height={{phone : "90px",desktopLarge : "108px"}}>
            <StyledDiv galleryImage={props.galleryImage} image={props.image} background={props.background}>
                <img src={props.image}></img>
            </StyledDiv>
        </Box>
        :
        <Box borderRadius={"5px"} width={{phone : "351px",desktopLarge : "752px"}} height={{phone : "355px"}}>
            <StyledDiv galleryImage={props.galleryImage} image={props.image} background={props.background}>
                <img src={props.image}></img>
            </StyledDiv>
        </Box>
    )
}