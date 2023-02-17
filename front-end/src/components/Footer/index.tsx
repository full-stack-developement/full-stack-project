import { Footer1 } from "./styles";
import logoMotorsShop from "../../assets/logoMotorsShop.png";

const Footer = () => {
  return (
    <Footer1>
      <img src={logoMotorsShop} alt="logo" />
      <p>&copy; 2002 - Todos os direitos reservados</p>
      <button>^</button>
    </Footer1>
  );
};

export default Footer;
