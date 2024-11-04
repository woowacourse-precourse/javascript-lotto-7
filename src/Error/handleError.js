import { ERROR_MESSAGE_PREFIX } from '../constants/errorMessage.js';

export default function throwError(message) {
  throw new Error(`${ERROR_MESSAGE_PREFIX} ${message}`);
}
