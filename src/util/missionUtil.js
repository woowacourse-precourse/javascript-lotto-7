import { Console, Random } from '@woowacourse/mission-utils';

export const readUserInput = (content) => {
  return Console.readLineAsync(content);
};

export const printResult = (content) => {
  return Console.print(content);
};

export const pickUniqueNumbersInRange = (min, max, length) => {
  return Random.pickUniqueNumbersInRange(min, max, length);
};
