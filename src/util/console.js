import { Console } from '@woowacourse/mission-utils';
import errorBoundary from '../error/errorBoundary.js';

export async function readLine(message = '', validation = () => {}) {
  let input;

  await errorBoundary(async () => {
    input = await Console.readLineAsync(message);
    validation(input);
  });

  return input;
}

export function print(message = '') {
  Console.print(message);
}
