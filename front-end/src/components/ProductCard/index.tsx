import carImg from "../../assets/carImg.png";
import Avatar from "../Avatar";
import InfoVehicle from "../InfoVehicle";
import { ProductCardContainer } from "./style";

const ProductCard = () => {
  return (
    <ProductCardContainer>
      <div className='vehicleImg'>
        <img src={carImg} alt='A car image' />
      </div>
      <h2 className='vehicleTitle'>Product title stays here - max 1 line</h2>
      <p className='vehicleDescription'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sint
        vero. Sunt magnam quae et dolorem sequi aut beatae recusandae, assumenda
        iste ad ab quod, aliquid dignissimos harum qui maiores?
      </p>
      <Avatar />
      <InfoVehicle />
    </ProductCardContainer>
  );
};

export default ProductCard;
