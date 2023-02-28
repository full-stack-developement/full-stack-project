import { AppError, handleError } from "./../Error/ErrorResponse";
import { Request, Response } from "express";
import { IAddressCreate } from "../interfaces/address.interface";
import { addressCreateService } from "../services/address.service";

export async function addressCreateController(req: Request, res: Response) {
  try {
    const { cep, state, city, street, number, complement }: IAddressCreate =
      req.body;

    const createdAddress = await addressCreateService({
      cep,
      state,
      city,
      street,
      number,
      complement,
    });

    return res.status(201).json(createdAddress);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
    return res.json({ message: "Internal server error" }).status(500);
  }
}
