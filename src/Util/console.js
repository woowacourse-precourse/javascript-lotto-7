import { Console, Random } from '@woowacourse/mission-utils';

export const print = (content) => {
  return Console.print(content);
};

export const readLineAsync = (content) => {
  return Console.readLineAsync(content);
};
export const pickUniqueNumbersInRange = () => {
  return Random.pickUniqueNumbersInRange(1, 45, 6);
};
