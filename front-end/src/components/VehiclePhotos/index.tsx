import { Box,Wrap, WrapItem} from "@chakra-ui/react";
import image from "../../assets/carImg.png"
import { CarImage } from "../CarImage";

export function VehiclePhotos(){
    return(
        <Box zIndex={1} padding={"3rem"}>
            <Wrap>
                <WrapItem>
                    <CarImage background={true} galleryImage={true} image={image} ></CarImage>
                </WrapItem>
                <WrapItem>
                    <CarImage background={true} galleryImage={true} image={image}></CarImage>
                </WrapItem>
                <WrapItem>
                    <CarImage background={true} galleryImage={true} image={image}></CarImage>
                </WrapItem>
            </Wrap>
            <Wrap>
                <WrapItem>
                    <CarImage background={true} galleryImage={true} image={image}></CarImage>
                </WrapItem>
                <WrapItem>
                    <CarImage background={true} galleryImage={true} image={image}></CarImage>
                </WrapItem>
                <WrapItem>
                    <CarImage background={true} galleryImage={true} image={image}></CarImage>
                </WrapItem>
            </Wrap>
        </Box>
    )
}