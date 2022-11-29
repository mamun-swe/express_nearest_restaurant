import { Router } from "express";
import { restaurantValidators } from "../validators/restaurant/restaurant.validator";
import * as restaurantController from "../controllers/restaurant.controller";

export const router: Router = Router();

router.post(
  "/nearest",
  restaurantValidators.nearest,
  restaurantController.index
);
router.post("/create", restaurantValidators.create, restaurantController.store);
