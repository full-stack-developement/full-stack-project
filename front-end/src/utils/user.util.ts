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
import { IUserUpdate } from "../interfaces/user.interface";

export async function loginUser(data: FieldValues) {
  let responseLogin = { data: "", message: "" as "success" | "error" };
  try {
    const response = await apiUser.post("/login", data);
    responseLogin.data = response.data;
    responseLogin.message = "success";
    return responseLogin;
  } catch (err) {
    if (err instanceof AxiosError) {
      responseLogin.message = "error";
      return responseLogin;
    }
  }
}

export async function updateUser(data: FieldValues, id: string) {
  let responseUpdate = {
    data: {} as IUserUpdate,
    message: "" as "success" | "error",
  };
  try {
    let validatedData = {} as FieldValues;
    for (const key in data) {
      if (data[key]) {
        validatedData[key] = data[key];
      }
    }
    const response = await apiUser.patch(`/${id}`, validatedData);
    responseUpdate.data = response.data;
    responseUpdate.message = "success";
    return responseUpdate;
  } catch (err) {
    if (err instanceof AxiosError) {
      responseUpdate.message = "error";
      return responseUpdate;
    }
  }
}

export async function updateUser(data: FieldValues, id: string) {
  let responseUpdate = {
    data: {} as IUserUpdate,
    message: "" as "success" | "error",
  };
  try {
    let validatedData = {} as FieldValues;
    for (const key in data) {
      if (data[key]) {
        validatedData[key] = data[key];
      }
    }
    const response = await apiUser.patch(`/${id}`, validatedData);
    responseUpdate.data = response.data;
    responseUpdate.message = "success";
    return responseUpdate;
  } catch (err) {
    if (err instanceof AxiosError) {
      responseUpdate.message = "error";
      return responseUpdate;
    }
  }
}
