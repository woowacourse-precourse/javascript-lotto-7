import { ERROR_MESSAGES } from "../constants/messages.js";

const throwError = (errorMessage) => {
  throw new Error(`${ERROR_MESSAGES.HEADER}${errorMessage}`);
};
export default throwError;
