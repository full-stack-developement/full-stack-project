export interface IUserCreate {
  accountType: "seller" | "buyer";
  full_name: string;
  email: string;
  cpf: number;
  phone: number;
  birthDate: Date;
  description: string;
  password: string;
}
