import { CarImage } from "../CarImage";
import card from "../../assets/carImg.png"
import { Box, Flex } from "@chakra-ui/react";
import { VehiclePhotos } from "../VehiclePhotos";
import InfoVehicle from "../InfoVehicle";
import {Text} from "../Text"
import { Button } from "../Button";

export function Vehicle(){
    return (
        <Flex width={"100%"} justifyContent={"center"} alignItems={{phone : "center", desktopLarge : "flex-start"}} flexDirection={{phone : "column",desktopLarge : "row"}} gap={"40px"}>
            <Flex flexDirection="column" gap={"1rem"} alignItems={"center"}>
                <CarImage galleryImage={false} background={true} image={card}></CarImage>
                <Box zIndex={1} backgroundColor={"greyScale.grey10"} borderRadius={"5px"} width={{phone : "351px",desktopLarge : "752px"}} padding={"1rem"}>
                    <Text variant="title-card" text="Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 "></Text>
                    <InfoVehicle colorClass="vehiclePrice-grey"></InfoVehicle>
                    <Button text="Comprar" size="small-auto" variant="buy-vehicle"></Button>
                </Box>
            </Flex>
            <VehiclePhotos></VehiclePhotos>
        </Flex>
    )
}