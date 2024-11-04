import { Console } from '@woowacourse/mission-utils';

export const retryOnError = async (action) => {
  while (true) {
    try {
      return await action();
    } catch (error) {
      Console.print(`${error.message}\n`);
    }
  }
};