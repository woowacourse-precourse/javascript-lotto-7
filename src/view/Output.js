import { Console } from '@woowacourse/mission-utils';

class Output {
  /** @param {number[][]} allNumbers */
  static printLottoNumbersAll(allNumbers) {
    Output.#printNumberOfPurchase(allNumbers.length);
    allNumbers.forEach(Output.#printLottoNumbers);
  }

  /** @param {number[]} numbers */
  static #printLottoNumbers(numbers) {
    Console.print(`[${numbers.join(', ')}]`);
  }

  /** @param {number} length */
  static #printNumberOfPurchase(length) {
    Console.print(`\n${length}개를 구매했습니다.`);
  }
}

export default Output;
