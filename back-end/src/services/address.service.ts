import AppDataSource from "../data-source";
import { Address } from "../entities/address";

export const addressUpdatedService = async (id: string, { cep, state, city, street, number, complement }: IAddressUpdateRequest) => {
    try {
        const addressRepository = AppDataSource.getRepository(Address);
  
        const addressUpdated = await addressRepository.findOneBy({
            id: id
        })
  
        if (!addressUpdated) {
            throw new Error('Address not found')
        };
  
        await addressRepository.update(
            id,
        {
            cep: cep ? cep : addressUpdated.cep,
            state: state ? state : addressUpdated.state,
            city: city ? city : addressUpdated.city,
            street: street ? street : addressUpdated.street,
            number: number ? number : addressUpdated.number,
            complement: complement ? complement : addressUpdated.complement,
        }
        );
  
        const updatedAddress = await addressRepository.findOneBy({
            id: id
        });
  
        return updatedAddress
    } catch (error) {
        throw new Error(error)
    }
  };