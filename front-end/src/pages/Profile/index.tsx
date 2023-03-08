import { AvatarContainer } from "../../components/AvatarContainer";
import { Background } from "../../components/Background";
import { AuctionList, SaleList } from "../../components/Lists";
import { NavBar } from "../../components/NavBar";
import Footer from "../../components/Footer";
import { AnnouncementContext } from "../../contexts/announcement.context";
import { useContext, useEffect, useState } from "react";
import { apiAnnouncement } from "../../api";
import { useParams } from "react-router-dom";
import { getAnnouncementUser } from "../../utils/announcement.util";
import { IAnnouncement } from "../../interfaces/announcement.interface";
import { Box, Text } from "@chakra-ui/react";

export function Profile() {

  const {announcements, setAnnouncements } = useContext(AnnouncementContext);
  const {profile_id} = useParams()

  useEffect(() => {
    async function getAnnouncementsUser(){
        const response = await getAnnouncementUser(profile_id as string)
        if(response?.message == "success"){
          console.log(response)
          setAnnouncements(response?.data)
        }
        if(response?.message == "error"){
          setAnnouncements([{}] as IAnnouncement[])
        }
    }
    getAnnouncementsUser()
  }, [profile_id]);

  return (
    <>
      <NavBar></NavBar>
      <Background purpleHeight="300px">
        <>
          <AvatarContainer user_id={profile_id as string} size="big"></AvatarContainer>
          <AuctionList></AuctionList>
          {announcements.length == 0 ? (
            <Box marginTop={"2rem"} ml={"50rem"}>
              <Text variant={"title"}>Sem anúncios no momento.</Text>
            </Box>
          ):(
            <>
            <SaleList vehicleType="Carros"></SaleList>
            <SaleList vehicleType="Motos"></SaleList>
            </>
          )}
        </>
      </Background>
      <Footer />
    </>
  );
}
