import { Models } from "../../models";
import { IRestaurant, IRestaurantCreate } from "../../types";

/* create new resource */
const createRestaurant = async ({
  documents,
}: {
  documents: IRestaurantCreate;
}): Promise<IRestaurant> => {
  const newRestaurant = new Models.Restaurant({
    name: documents.name,
    geoLocation: {
      coordinates: [documents.longitude, documents.latitude],
    },
  });
  return await newRestaurant.save();
};

/* nearest resources */
const nearestRestaurant = async ({
  longitude,
  latitude,
}: {
  longitude: number;
  latitude: number;
}): Promise<IRestaurant[] | []> => {
  return await Models.Restaurant.find({
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [longitude, latitude],
      },
      $minDistance: 0,
      $maxDistance: 100,
    },
  });
};

export const restaurantService = {
  createRestaurant,
  nearestRestaurant,
};
