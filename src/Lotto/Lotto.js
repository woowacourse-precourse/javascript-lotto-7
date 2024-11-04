import LOTTO_CONFIG from '../constants/lottoConfig.js';
import RANK_CONFIG from '../constants/rankConfig.js';
import ERROR_MESSAGE from '../constants/errorMessage.js';
import printString from '../output/printString.js';


class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  print(){
    printString(`[${this.#numbers.join(', ')}]`);
  }

  hasNumber(number) {
    return this.#numbers.includes(number);
  }

  getWinningRank(winningLotto, bonusNumber) {
    const matchingCount = this.#getMatchingCount(winningLotto);
    if (matchingCount === RANK_CONFIG.FIRST.COUNT) {
      return RANK_CONFIG.FIRST.RANK;
    }
    if (matchingCount === RANK_CONFIG.SECOND.COUNT && winningLotto.hasNumber(bonusNumber)) {
      return RANK_CONFIG.SECOND.RANK;
    }
    if (matchingCount === RANK_CONFIG.THIRD.COUNT) {
      return RANK_CONFIG.THIRD.RANK;
    }
    if (matchingCount === RANK_CONFIG.FOURTH.COUNT) {
      return RANK_CONFIG.FOURTH.RANK;
    }
    if (matchingCount === RANK_CONFIG.FIFTH.COUNT) {
      return RANK_CONFIG.FIFTH.RANK;
    }
    return null;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_CONFIG.NUMBER_COUNT) throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_OVER_COUNT);

    const numbersSet = new Set(numbers);

    if (numbersSet.size !== LOTTO_CONFIG.NUMBER_COUNT) throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_DUPLICATE);

    numbersSet.forEach(number => {
      if(typeof number !== 'number' || Number.isNaN(number)) throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_IMPOSSIBLE);
      if (!Number.isInteger(number)) throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_NOT_INTEGER);
      if (number < LOTTO_CONFIG.MIN_NUMBER) throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_TOO_SMALL);
      if (number > LOTTO_CONFIG.MAX_NUMBER) throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_TOO_LARGE);

    });
  }

  #getMatchingCount(winningLotto){
    let count = 0;
    this.#numbers.forEach(number => {
      if(winningLotto.hasNumber(number)) {
        count++;
      }

    })
    return count;
  }
}

export default Lotto;
