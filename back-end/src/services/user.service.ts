import { QueryFailedError } from "typeorm";
import { IUserCreate, IUserUpdate, IUserUpdateRequest} from "./../interfaces/requests.interface";
import AppDataSource from "../data-source";
import { User } from "../entities/user";
import bcrypt, { compare } from "bcryptjs";
import { AppError, ErrorResponse } from "../Error/ErrorResponse";
import { instanceToPlain } from "class-transformer";
import { Address } from "../entities/address";
import { IAddressCreate, IAddressUpdate } from "../interfaces/address.interface";
import { ILogin } from "../interfaces/login.interface";
import {sign} from "jsonwebtoken"
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
export async function userLoginService(data: ILogin) {
  const email = data.email
  const password = data.password

  const user = await userRepository.findOneBy({email : email})

  if(!user){
    throw new ErrorResponse("Email or password not valid",400)
  }

  const isValidPassword = await compare(password,user.password)

  if(!isValidPassword){
    throw new ErrorResponse("Email or password not valid",400)
  }

  const token = sign({id : user.id},process.env.SECRET_KEY,{expiresIn : "24h",subject : user.id})

  return token

}


export const userUpdateService = async (id: string, { full_name, email, cpf, phone, birthDate, description, password, address}: IUserUpdate, addressData:IAddressUpdate):Promise<User> => {
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
        password: password  ? await hash(password, 10) : userUpdated.password,
        address : {
          cep: addressData.cep ? addressData.cep : userUpdated.address.cep,
          state: addressData.state ? addressData.state : userUpdated.address.state,
          city: addressData.city ? addressData.city : userUpdated.address.city,
          street: addressData.street ? addressData.street : userUpdated.address.street,
          number: addressData.number ? addressData.number : userUpdated.address.number,
          complement: addressData.complement ? addressData.complement : userUpdated.address.complement,
        }

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