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
  return await Models.Restaurant.aggregate([
    {
      $geoNear: {
        near: {
          type: "Point",
          coordinates: [longitude, latitude],
        },
        distanceField: "dist.calculated",
        maxDistance: 2000,
        spherical: true,
      },
    },
  ]);
};

export const restaurantService = {
  createRestaurant,
  nearestRestaurant,
};
