import { Box,Flex,Wrap, WrapItem} from "@chakra-ui/react";
import image from "../../assets/carImg.png"
import { CarImage } from "../CarImage";
import {Text} from "../Text"

export function VehiclePhotos(){
    return(
        <Flex height={"max-content"} width={"max-content"} backgroundColor={"greyScale.grey10"} flexDirection={"column"} zIndex={1} padding={"2rem"} gap={"1rem"}>
            <Text text="Fotos" variant="title-card"></Text>
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
        </Flex>
    )
}