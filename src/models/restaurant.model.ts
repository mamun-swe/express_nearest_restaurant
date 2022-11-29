import { Schema, model } from "mongoose";
import { IRestaurant } from "../types";

const restaurantSchema: Schema = new Schema<IRestaurant>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    geoLocation: {
      type: {
        type: String,
        trim: true,
        default: "Point",
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

restaurantSchema.index({ geoLocation: "2dsphere" });

export const Restaurant = model<IRestaurant>("Restaurant", restaurantSchema);
