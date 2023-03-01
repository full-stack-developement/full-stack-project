import { Request, Response } from "express";
import { addressUpdatedService } from "../services/address.service";

export const addressUpdateController = async (
    req: Request,
    res: Response
  ) => {
    try {
      const id = req.params.id;
  
      const data = req.body;
  
      const addressUpdated = await addressUpdatedService(id, data);
  
      return res.status(200).send(addressUpdated);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
  