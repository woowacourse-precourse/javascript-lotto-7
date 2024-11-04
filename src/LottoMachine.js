import { LOTTO } from './constants/constants.js';
import getRandomUniqueNumbers from './utils/getRandomUniqueNumbers.js';
import Lotto from './Lotto.js';

class LottoMachine {
  #count;
  #lottoNumbers;
  #winningCount;

  constructor(money) {
    this.#count = money / LOTTO.PRICE;
    this.#lottoNumbers = [];
    this.#winningCount = { THREE: 0, FOUR: 0, FIVE: 0, FIVE_BONUS: 0, SIX: 0 };
  }

  generateLottoNumbers() {
    for (let i = 0; i < this.#count; i += 1) {
      const randomNumbers = getRandomUniqueNumbers(
        LOTTO.START_NUMBER,
        LOTTO.END_NUMBER,
        LOTTO.COUNT_NUMBER
      ).sort((a, b) => a - b);

      this.#lottoNumbers.push(new Lotto(randomNumbers));
    }
  }

  getMatchingCount(lottoNumbers, winningNumbers) {
    return lottoNumbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  updateWinningCount(matchingCount, lottoNumbers, bonusNumber) {
    if (matchingCount === 3) {
      this.#winningCount.THREE += 1;
    } else if (matchingCount === 4) {
      this.#winningCount.FOUR += 1;
    } else if (matchingCount === 5 && lottoNumbers.includes(bonusNumber)) {
      this.#winningCount.FIVE_BONUS += 1;
    } else if (matchingCount === 5) {
      this.#winningCount.FIVE += 1;
    } else if (matchingCount === 6) {
      this.#winningCount.SIX += 1;
    }
  }

  checkLottoNumbers(winningNumbers, bonusNumber) {
    this.#lottoNumbers.forEach((lottoNumbers) => {
      const matchingCount = this.getMatchingCount(
        lottoNumbers.getNumber(),
        winningNumbers
      );
      this.updateWinningCount(
        matchingCount,
        lottoNumbers.getNumber(),
        bonusNumber
      );
    });
  }

  getWinningCount() {
    return this.#winningCount;
  }

  getLottoNumbers() {
    return this.#lottoNumbers;
  }
}

export default LottoMachine;
