import { Console } from '@woowacourse/mission-utils';

export default class Output {
  static printArrayWithComma(arrays) {
    arrays.forEach((array) => {
      Console.print(`[${array.join(', ')}]`);
    });
  }

  static print(message) {
    Console.print(message);
  }
}
