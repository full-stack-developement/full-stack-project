import { StyledDiv } from "./style";
import { CarImage } from "../CarImage";
import { Timer } from "../Timer";
import Avatar from "../Avatar";
import InfoVehicle from "../InfoVehicle";
import {AiOutlineArrowRight} from "react-icons/ai"

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
                    <div className="content">
                        <h3 className="content_title">{props.title}</h3>
                        <p className="content_description">{props.description}</p>
                        <Avatar></Avatar>
                        <InfoVehicle></InfoVehicle>
                    </div>
                    <div className="navigation">
                        <p className="navigation_title">Acessar página do leilão</p>
                        <AiOutlineArrowRight className="navigation_icon"></AiOutlineArrowRight>
                    </div>
            </div>
            <CarImage image={props.image}></CarImage>
        </StyledDiv>
    )
}