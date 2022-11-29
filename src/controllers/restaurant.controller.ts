import { NextFunction, Request, Response } from "express";
import { HttpSuccessResponse } from "../helper";
import { IRestaurantCreate } from "../types";
import { restaurantService } from "../services/restaurant/restaurant.service";

/* Nearest resources */
export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { longitude, latitude } = req.body;
    const results = await restaurantService.nearestRestaurant({
      longitude,
      latitude,
    });

    res.status(200).json(
      await HttpSuccessResponse({
        status: true,
        message: "Nearest restaurants.",
        data: results,
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
    const { name, longitude, latitude } = req.body;

    const documents: IRestaurantCreate = {
      name,
      longitude,
      latitude,
    };

    await restaurantService.createRestaurant({ documents });

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
