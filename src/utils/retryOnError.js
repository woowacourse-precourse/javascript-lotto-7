import { printMessage, throwError } from './console.js';
import { GAME_RULES } from '../constants/gameRule.js';

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

  throwError('최대 재입력 횟수를 넘어가셨습니다');
}

export default retryOnError;
