import { VehicleInfoContainer } from "./style";

const InfoVehicle = () => {
  return (
    <VehicleInfoContainer>
      <div className='vehicleInfoDetails'>
        <div className='vehicleDetails'>0 KM</div>
        <div className='vehicleDetails'>2019</div>
      </div>
      <div className='vehiclePrice'>R$00.000,00</div>
    </VehicleInfoContainer>
  );
};

export default InfoVehicle;
