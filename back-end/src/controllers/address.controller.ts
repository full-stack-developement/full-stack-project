import { Request, Response } from "express";
import { addressUpdatedService } from "../services/address.service";

export const addressUpdateController = async (
    req: IAddressRequest,
    res: Response
  ) => {
    try {
      const { id } = req.params;
  
      const data = req.data;
  
      const addressUpdated = await addressUpdatedService(id, data);
  
      return res.status(200).send(addressUpdated);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
  