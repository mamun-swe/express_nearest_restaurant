import { NextFunction, Request, Response } from "express";
import { HttpSuccessResponse } from "../helper";
import { restaurantService } from "../services/restaurant/restaurant.service";

/* Nearest resources */
export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json(
      await HttpSuccessResponse({
        status: true,
        message: "Nearest restaurants.",
        data: [],
      })
    );
  } catch (error: any) {
    console.log(error);
    next(error);
  }
};

/* Store resource */
export const store = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(201).json(
      await HttpSuccessResponse({
        status: true,
        message: "Restaurant created.",
      })
    );
  } catch (error: any) {
    console.log(error);
    next(error);
  }
};
