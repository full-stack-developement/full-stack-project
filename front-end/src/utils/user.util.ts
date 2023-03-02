import { AxiosError } from "axios";
import { FieldValues } from "react-hook-form";
import { apiUser } from "../api";

export async function createUser(data: FieldValues) {
  console.log("antes do post");
  await apiUser
    .post("", data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      if (error instanceof AxiosError) {
        return error.message;
      }
    });
}
