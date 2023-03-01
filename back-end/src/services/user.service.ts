import { IUserCreate, IUserUpdateRequest} from "./../interfaces/requests.interface";
import AppDataSource from "../data-source";
import { User } from "../entities/user";
import bcrypt from "bcryptjs";
import { AppError } from "../Error/ErrorResponse";
import { instanceToPlain } from "class-transformer";
import { Address } from "../entities/address";
import { IAddressCreate, IAddressUpdate } from "../interfaces/address.interface";
import { hash } from "bcrypt";

const userRepository = AppDataSource.getRepository(User);

export async function userCreateService(
  {
    accountType,
    full_name,
    email,
    cpf,
    phone,
    birthDate,
    description,
    password,
  }: IUserCreate,
  addressData: IAddressCreate
): Promise<User> {
  const addressRepository = AppDataSource.getRepository(Address);

  const userEmail = await userRepository.findOneBy({ email });
  if (userEmail) {
    throw new AppError(409, "User already exist");
  }

  const address = addressRepository.create(addressData);
  await addressRepository.save(address);

  const createdUser = userRepository.create({
    accountType,
    full_name,
    email,
    cpf,
    phone,
    birthDate,
    description,
    password: bcrypt.hashSync(password, 10),
    address,
  });

  await userRepository.save(createdUser);

  return createdUser;
}

export async function userDeleteService(id: string) {
  const user = await userRepository.findOneBy({ id: id });

  if (!user.isActive) {
    throw new Error("User already deactivated");
  }

  user.isActive = false;

  userRepository.save(user);
}

export async function userListSpecificService(id: string) {
  const user = await userRepository.findOneBy({ id: id });

  if (!user) {
    throw new Error("User not found");
  }

  return instanceToPlain(user);
}

export const userUpdateserService = async (id: string, { full_name, email, cpf, phone, birthDate, description, password}: IUserUpdateRequest) => {
  try {
      const userRepository = AppDataSource.getRepository(User);

  const userUpdated = await userRepository.findOneBy({
    id: id
  })

  if (!userUpdated) {
    throw new Error('User not found')
  };

  await userRepository.update(
    id,
    {
      full_name: full_name ? full_name : userUpdated.full_name,
      email: email ? email : userUpdated.email,
      cpf: cpf ? cpf : userUpdated.cpf,
      phone: phone ? phone : userUpdated.phone,
      birthDate: birthDate ? birthDate : userUpdated.birthDate,
      description: description ? description : userUpdated.description,
      password: password  ? await hash(password, 10) : userUpdated.password
    }
  );

  const updatedUser = await userRepository.findOneBy({
    id: id
  });

  return updatedUser
      
  } catch (error) {
      throw new Error(error)
  }

  
};

export const userAddressUpdatedService = async (id: string, { cep, state, city, street, number, complement }: IAddressUpdate) => {
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
  
