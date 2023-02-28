import AppDataSource from "../data-source";
import { Address } from "../entities/address";
import { IAddressCreate } from "../interfaces/address.interface";

export async function addressCreateService({
  cep,
  state,
  city,
  street,
  number,
  complement,
}: IAddressCreate) {
  const addressRepository = AppDataSource.getRepository(Address);

  const createdAddress = addressRepository.create({
    cep,
    state,
    city,
    street,
    number,
    complement,
  });

  await addressRepository.save(createdAddress);

  return createdAddress;
}
