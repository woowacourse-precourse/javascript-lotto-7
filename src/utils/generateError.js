import { ERROR_PREFIX } from "../constants/Message";

export const generateError = (errorText) => {
  throw new Error(`${ERROR_PREFIX} ${errorText}`);
};
