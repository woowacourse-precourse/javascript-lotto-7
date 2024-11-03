import { Console } from '@woowacourse/mission-utils';

export const errorHandler = (error) => {
  Console.print(`[ERROR] ${error.message}`);
};
