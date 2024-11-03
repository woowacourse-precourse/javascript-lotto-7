import { Console } from '@woowacourse/mission-utils';
import { JACKPOT_UNIT, RESULT_MESSAGES } from './constants.js';

class LottoResult {
  #place;
  #lottoList;
  #winningNumbers;
  #bonusNumber;

  constructor(lottoList, winningNumbers, bonusNumber) {
    this.#lottoList = lottoList;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#place = Array(5).fill(0);
  }

  calculateResult() {
    this.#lottoList.forEach((lotto) => {
      const matchCount = lotto.matchNumbersCount(this.#winningNumbers);

      if (matchCount === 3) {
        this.#place[0] += 1;
      } else if (matchCount === 4) {
        this.#place[1] += 1;
      } else if (matchCount === 5 && !lotto.getNumbers().includes(this.#bonusNumber)) {
        this.#place[2] += 1;
      } else if (matchCount === 5) {
        this.#place[3] += 1;
      } else if (matchCount === 6) this.#place[4] += 1;
    });
  }

  printStatistics() {
    Console.print(RESULT_MESSAGES.STATISTICS);
    Console.print(RESULT_MESSAGES.DIVIDER);
    Console.print(`${RESULT_MESSAGES.PLACE_5TH} ${this.#place[0]}개`);
    Console.print(`${RESULT_MESSAGES.PLACE_4TH} ${this.#place[1]}개`);
    Console.print(`${RESULT_MESSAGES.PLACE_3RD} ${this.#place[2]}개`);
    Console.print(`${RESULT_MESSAGES.PLACE_2ND} ${this.#place[3]}개`);
    Console.print(`${RESULT_MESSAGES.PLACE_1ST} ${this.#place[4]}개`);
  }

  printReturns() {
    const total = JACKPOT_UNIT.reduce(
      (acc, jackpot, index) => acc + jackpot * this.#place[index],
      0,
    );
    const rate = ((total / (this.#lottoList.length * 1000)) * 100).toFixed(1);
    Console.print(`${RESULT_MESSAGES.RETURNS} ${rate}%입니다.`);
  }
}

export default LottoResult;
