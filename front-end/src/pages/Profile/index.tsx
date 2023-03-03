import { AvatarContainer } from "../../components/AvatarContainer";
import { Background } from "../../components/Background";
import { AuctionList, SaleList } from "../../components/Lists";
import { NavBar } from "../../components/NavBar";
import Footer from "../../components/Footer";
import { AnnouncementContext } from "../../contexts/announcement.context";
import { useContext, useEffect } from "react";
import { apiAnnouncement } from "../../api";

export function Profile() {

  const { announcements, setAnnouncements } = useContext(AnnouncementContext);

  useEffect(() => {
    apiAnnouncement
      .get("")
      .then((res) => {
        setAnnouncements(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <Background purpleHeight="300px">
        <>
          <AvatarContainer size="big"></AvatarContainer>
          <AuctionList></AuctionList>
          <SaleList vehicleType="Carros"></SaleList>
          <SaleList vehicleType="Motos"></SaleList>
        </>
      </Background>
      <Footer />
    </>
  );
}
