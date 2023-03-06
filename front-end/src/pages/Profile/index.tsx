import { AvatarContainer } from "../../components/AvatarContainer";
import { Background } from "../../components/Background";
import { AuctionList, SaleList } from "../../components/Lists";
import { NavBar } from "../../components/NavBar";
import Footer from "../../components/Footer";
import { AnnouncementContext } from "../../contexts/announcement.context";
import { useContext, useEffect } from "react";
import { apiAnnouncement } from "../../api";
import { useParams } from "react-router-dom";
import { getAnnouncementUser } from "../../utils/announcement.util";
import { IAnnouncement } from "../../interfaces/announcement.interface";

export function Profile() {

  const {setAnnouncements } = useContext(AnnouncementContext);
  const {profile_id} = useParams()

  useEffect(() => {
    async function getAnnouncementsUser(){
        const response = await getAnnouncementUser(profile_id as string)
        if(response?.message == "success"){
          setAnnouncements(response?.data)
        }
        if(response?.message == "error"){
          setAnnouncements([{}] as IAnnouncement[])
        }
    }
    getAnnouncementsUser()
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <Background purpleHeight="300px">
        <>
          <AvatarContainer user_id={profile_id as string} size="big"></AvatarContainer>
          <AuctionList></AuctionList>
          <SaleList vehicleType="Carros"></SaleList>
          <SaleList vehicleType="Motos"></SaleList>
        </>
      </Background>
      <Footer />
    </>
  );
}
