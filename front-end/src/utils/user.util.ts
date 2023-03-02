import { AxiosError } from "axios";
import { FieldValues } from "react-hook-form";
import { apiUser } from "../api";

export async function createUser(data: FieldValues) {
  const addressData = {
    cep: data.cep,
    state: data.state,
    city: data.city,
    street: data.street,
    number: data.number,
    complement: data.complement,
  };

  data.address = addressData;

  await apiUser
    .post("", data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      if (error instanceof AxiosError) {
        console.log(error);
        return error.message;
      }
    });
}
