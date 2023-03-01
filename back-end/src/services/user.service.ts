import { IUserCreate } from "./../interfaces/requests.interface";
import AppDataSource from "../data-source";
import { User } from "../entities/user";
import bcrypt, { compare } from "bcryptjs";
import { AppError, ErrorResponse } from "../Error/ErrorResponse";
import { instanceToPlain } from "class-transformer";
import { Address } from "../entities/address";
import { IAddressCreate } from "../interfaces/address.interface";
import { ILogin } from "../interfaces/login.interface";
import {sign} from "jsonwebtoken"

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

