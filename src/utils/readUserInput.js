import { Console } from '@woowacourse/mission-utils';
import { retryOnError } from './retryOnError.js';

export async function readUserInput(message, validators = [], retries = 3) {
  return retryOnError(async () => {
    const input = await Console.readLineAsync(`${message}\n`);

    validators.forEach((validator) => validator(input, true));

    return input;
  }, retries);
}
