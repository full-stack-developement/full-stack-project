import carImg from "../../assets/carImg.png";
import { ProductCardContainer } from "./style";

const ProductCard = () => {
  return (
    <ProductCardContainer>
      <div className='vehicleImg'>
        <img src={carImg} alt='A car image' />
      </div>
      <h2 className='vehicleTitle'>Car name</h2>
      <p className='vehicleDescription'>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sint
        vero. Sunt magnam quae et dolorem sequi aut beatae recusandae, assumenda
        iste ad ab quod, aliquid dignissimos harum qui maiores?
      </p>
      <span className='vehicleAvatar'>Anunciante</span>
      <div className='vehicleInfo'>
        <div className='vehicleInfoDetails'>
          <div className='vehicleDetails'>0 KM</div>
          <div className='vehicleDetails'>2019</div>
        </div>
        <div className='vehiclePrice'>R$00.000,00</div>
      </div>
    </ProductCardContainer>
  );
};

export default ProductCard;
