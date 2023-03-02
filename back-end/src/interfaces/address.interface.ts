export interface IAddressCreate {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement: string;
}

export interface IAddressUpdate {
  cep?: number;
  state?: string;
  city?: string;
  street?: string;
  number?: number;
  complement?: string;
}