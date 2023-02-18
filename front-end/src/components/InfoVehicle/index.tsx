import { VehicleInfoContainer } from "./style";

export interface IInfoVehicleProps {
  colorClass: string;
}

const InfoVehicle = (props: IInfoVehicleProps) => {
  return (
    <VehicleInfoContainer>
      <div className="vehicleInfoDetails">
        <div className="vehicleDetails">0 KM</div>
        <div className="vehicleDetails">2019</div>
      </div>
      <div className={props.colorClass}>R$00.000,00</div>
    </VehicleInfoContainer>
  );
};

export default InfoVehicle;
