type ErrorType = {
  field: string;
  message: string;
};

export interface IHttpErrorResponse {
  status: boolean;
  errors: ErrorType[];
}

export interface IHttpSuccessResponse {
  status: boolean;
  message: string;
  data?: any;
}

interface IRestaurantGeoLoc {
  type: "Point";
  coordinates: Number[];
}

export interface IRestaurant {
  name: string;
  geoLocation: IRestaurantGeoLoc;
}

export interface IRestaurantCreate {
  name: string;
  longitude: number;
  latitude: number;
}
