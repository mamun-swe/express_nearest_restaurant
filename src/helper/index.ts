import Mongoose from "mongoose";
import { IHttpErrorResponse, IHttpSuccessResponse } from "../types";

/* Valid mongoose ID */
export const validMongooseId = (id: Mongoose.Types.ObjectId | string) => {
  return Mongoose.Types.ObjectId.isValid(id);
};

/* Http error response */
export const HttpErrorResponse = async (
  payload: IHttpErrorResponse
): Promise<IHttpErrorResponse> => {
  return {
    status: payload.status,
    errors: [...payload.errors],
  };
};

/* Http success response */
export const HttpSuccessResponse = async (
  payload: IHttpSuccessResponse
): Promise<IHttpSuccessResponse> => {
  return {
    status: payload.status,
    message: payload.message,
    data: payload.data,
  };
};
