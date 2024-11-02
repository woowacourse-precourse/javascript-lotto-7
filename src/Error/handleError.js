import { ERROR_MESSAGE_PREFIX } from '../constants/errorMessage';

export default function throwError(message) {
  throw new Error(`${ERROR_MESSAGE_PREFIX} ${message}`);
}
