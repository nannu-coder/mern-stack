import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./CustomApi.js";

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequestError;
