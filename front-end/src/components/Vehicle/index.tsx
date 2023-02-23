import { CarImage } from "../CarImage";
import card from "../../assets/carImg.png"
import { Box, Flex } from "@chakra-ui/react";
import { VehiclePhotos } from "../VehiclePhotos";
import InfoVehicle from "../InfoVehicle";
import {Text} from "../Text"
import { Button } from "../Button";
import {useParams} from "react-router-dom"
import { IAnnouncement } from "../../interfaces/announcement.interface";
import { getSpecificAnnouncement } from "../../utils/announcement.util";
import { useEffect, useState } from "react";

export function Vehicle(){

    const {vehicle_id} = useParams()
    const [vehicle,setVehicle] = useState({} as IAnnouncement)

    useEffect(()=>{
        async function specificAnnouncement(){
            if(vehicle_id){
                const response = await getSpecificAnnouncement(vehicle_id)
                if(response?.message == "success"){
                    setVehicle(response?.data)
                }
            }
        }
        specificAnnouncement()
    },[])

    return (
        Object.keys(vehicle).length > 1 ? 
        <Flex width={"100%"} justifyContent={"center"} alignItems={{phone : "center", desktopSmall : "flex-start"}} flexDirection={{phone : "column",desktopSmall : "row"}} gap={"40px"}>
            <Flex flexDirection="column" gap={"1rem"} alignItems={"center"}>
                <CarImage galleryImage={false} background={true} image={vehicle.coverImage}></CarImage>
                <Box zIndex={1} backgroundColor={"greyScale.grey10"} borderRadius={"5px"} width={{phone : "351px",desktopLarge : "752px"}} padding={"1rem"}>
                    <Text variant="title-card" text={vehicle.title}></Text>
                    <InfoVehicle km={vehicle.km} price={vehicle.price} year={vehicle.year} colorClass="vehiclePrice-grey"></InfoVehicle>
                    <Button text="Comprar" size="small-auto" variant="buy-vehicle"></Button>
                </Box>
            </Flex>
            <VehiclePhotos></VehiclePhotos>
        </Flex>
        :
        <></>
    )
}