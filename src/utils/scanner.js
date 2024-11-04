import { Console } from '@woowacourse/mission-utils';

export const scan = async (question) => {
  return await Console.readLineAsync(question + '\n');
};
