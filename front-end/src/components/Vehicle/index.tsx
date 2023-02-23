import { CarImage } from "../CarImage";
import card from "../../assets/carImg.png"
import { Flex } from "@chakra-ui/react";
import { VehiclePhotos } from "../VehiclePhotos";

export function Vehicle(){
    return (
        <Flex width={"100%"} height={"100%"} alignItems={"flex-start"} justifyContent={"space-evenly"}>
            <CarImage galleryImage={false} background={true} image={card}></CarImage>
            <VehiclePhotos></VehiclePhotos>
        </Flex>
    )
}