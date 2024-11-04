import { ERROR_PREFIX } from "../constants/Message.js";

export const generateError = (errorText) => {
  throw new Error(`${ERROR_PREFIX} ${errorText}`);
};
