import { printMessage, throwError } from './console.js';
import { GAME_RULES } from '../constants/gameRule.js';
import { RETRY_ERROR_MESSAGE } from '../constants/error.js';

async function retryOnError(func) {
  let attempts = 0;

  while (attempts < GAME_RULES.MAX_RETRIES) {
    try {
      return await func();
    } catch (error) {
      printMessage(error.message);
      attempts += 1;
    }
  }

  throwError(RETRY_ERROR_MESSAGE.EXCEED_MAX_ATTEMPTS);
}

export default retryOnError;
