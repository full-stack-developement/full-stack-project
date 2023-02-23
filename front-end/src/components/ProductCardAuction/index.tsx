import { StyledDiv } from "./style";
import { CarImage } from "../CarImage";
import { Timer } from "../Timer";
import Avatar from "../Avatar";
import InfoVehicle from "../InfoVehicle";
import { AiOutlineArrowRight } from "react-icons/ai";

export function ProductCardAuction({ announcements }: any) {
  return announcements.map((announcement: any, index: any) => (
    <StyledDiv key={index}>
      <div className="box__content">
        <Timer></Timer>
        <div className="content">
          <h3 className="content_title">{announcement.title}</h3>
          <p className="content_description">{announcement.description}</p>
          <Avatar colorClass="avatarName-white"></Avatar>
          <InfoVehicle
            colorClass="vehiclePrice-white"
            km={announcement.km}
            price={announcement.price}
            year={announcement.year}
          ></InfoVehicle>
        </div>
        <div className="navigation">
          <p className="navigation_title">Acessar página do leilão</p>
          <AiOutlineArrowRight className="navigation_icon"></AiOutlineArrowRight>
        </div>
      </div>
      <CarImage image={announcement.coverImage} galleryImage={false}></CarImage>
    </StyledDiv>
  ));
}
