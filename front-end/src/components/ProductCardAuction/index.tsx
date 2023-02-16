import { StyledDiv } from "./style";
import { CarImage } from "../CarImage";
import { Timer } from "../Timer";
import Avatar from "../Avatar";

interface ICardImageProps{
    image : string
    title : string
    description : string
}

export function ProductCardAuction(props : ICardImageProps){
    return (
        <StyledDiv>
            <div className="box__content">
                <Timer></Timer>
                <div className="content_text">
                    <h3 className="text_title">{props.title}</h3>
                    <p className="text_description">{props.description}</p>
                    <Avatar></Avatar>
                </div>
            </div>
            <CarImage image={props.image}></CarImage>
        </StyledDiv>
    )
}