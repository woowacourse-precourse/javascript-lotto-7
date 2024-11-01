import { Console } from '@woowacourse/mission-utils';

class View {
  static async readInput(message) {
    const userInput = await Console.readLineAsync(message);
    return userInput;
  }

  static printResult(result) {
    Console.print(result);
  }

  static displayLottos(lottos) {
    lottos.forEach((lotto) => {
      View.printResult(View.#sortAscending(lotto));
    });
  }

  static #sortAscending = (numbers) => numbers.sort((a, b) => a - b);
}

export default View;
