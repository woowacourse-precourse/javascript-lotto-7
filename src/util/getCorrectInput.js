import { Console } from '@woowacourse/mission-utils';

export const getCorrectInput = async (operation) => {
  while (true) {
    try {
      return await operation();
    } catch (error) {
      Console.print(error.message);
    }
  }
};
