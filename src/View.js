import { Console } from '@woowacourse/mission-utils';

class View {
  static #sortAscending = (numbers) => numbers.sort((a, b) => a - b);

  static printResult(result) {
    Console.print(result);
  }


  static displayLottos(lottos) {
    lottos.forEach((lotto) => {
      View.printResult(View.#sortAscending(lotto));
    });
  }
}

export default View;
