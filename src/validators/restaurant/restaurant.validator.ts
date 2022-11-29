import Schema from "async-validator";
import { NextFunction, Request, Response } from "express";

/* Resource create validaor */
const create = async (req: Request, res: Response, next: NextFunction) => {
  const descriptor = <any>{
    name: {
      type: "string",
      required: true,
    },
    longitude: {
      type: "number",
      required: true,
      message: "Longitude is required.",
    },
    latitude: {
      type: "number",
      required: true,
      message: "Latitude is required.",
    },
  };

  /* Execute the validator */
  const validator = new Schema(descriptor);

  validator.validate({ ...req.body }, (errors: any) => {
    if (errors) {
      return res.status(422).json({
        status: false,
        errors,
      });
    }
    next();
  });
};

/* Nearest resource validaor */
const nearest = async (req: Request, res: Response, next: NextFunction) => {
  const descriptor = <any>{
    longitude: {
      type: "number",
      required: true,
      message: "Longitude is required.",
    },
    latitude: {
      type: "number",
      required: true,
      message: "Latitude is required.",
    },
  };

  /* Execute the validator */
  const validator = new Schema(descriptor);

  validator.validate({ ...req.body }, (errors: any) => {
    if (errors) {
      return res.status(422).json({
        status: false,
        errors,
      });
    }
    next();
  });
};

export const restaurantValidators = {
  create,
  nearest,
};
