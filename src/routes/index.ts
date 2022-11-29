import { Router } from "express";
import { restaurantValidators } from "../validators/restaurant/restaurant.validator";
import * as restaurantController from "../controllers/restaurant.controller";

export const router: Router = Router();

router.get("/", restaurantValidators.nearest, restaurantController.index);
router.post("/", restaurantValidators.create, restaurantController.store);
