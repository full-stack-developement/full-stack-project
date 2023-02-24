import { AvatarContainer } from "../../components/AvatarContainer";
import { Background } from "../../components/Background";
import { AuctionList, SaleList } from "../../components/Lists";
import { NavBar } from "../../components/NavBar";
import Footer from "../../components/Footer";

export function Profile() {
  return (
    <>
      <NavBar></NavBar>
      <Background purpleHeight="300px">
        <>
          <AvatarContainer></AvatarContainer>
          <AuctionList></AuctionList>
          <SaleList vehicleType="Carros"></SaleList>
          <SaleList vehicleType="Motos"></SaleList>
        </>
      </Background>
      <Footer />
    </>
  );
}
