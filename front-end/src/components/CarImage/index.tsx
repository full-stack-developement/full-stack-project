import { StyledDiv } from "./style"

interface ICardImageProps{
    image : string
}

export function CarImage(props : ICardImageProps){
    return (
        <StyledDiv>
            <img src={props.image}></img>
        </StyledDiv>
    )
}