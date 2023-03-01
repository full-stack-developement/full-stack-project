export interface IUserUpdate {
    id: string
    full_name: string;
    email: string;
    cpf: number;
    phone: number;
    birthDate: Date;
    description: string;
    password: string;
    address : IAddress
  }
interface IAddress{
  cep: number;
  state: string;
  city: string;
  street: string;
  number: number;
  complement: string;
}