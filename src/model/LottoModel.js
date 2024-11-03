import { Random } from '@woowacourse/mission-utils';
import Lotto from './../Lotto.js';
import { NUMBERS } from '../constants/Constants.js';

class LottoModel {
  #buyLottoCount;
  #randomLottoNumbers;
  #pickLottoNumber;
  #pickBonusNumber;

  constructor() {
    this.#buyLottoCount = 0;
    this.#randomLottoNumbers = [];
    this.#pickLottoNumber = [];
    this.#pickBonusNumber = 0;
  }

  setBuyLottoCount(buyLottoCount) {
    this.#buyLottoCount = buyLottoCount;
  }

  getBuyLottoCount() {
    return this.#buyLottoCount / NUMBERS.DIVIED_NUMBER;
  }

  generateRandomLottoNumbers() {
    this.#randomLottoNumbers = [];
    const count = this.getBuyLottoCount();

    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(
        NUMBERS.LOTTO_NUMBER.START,
        NUMBERS.LOTTO_NUMBER.END,
        NUMBERS.LOTTO_NUMBER.COUNT
      ).sort((a, b) => a - b);
      this.#randomLottoNumbers.push(new Lotto(numbers));
    }
  }

  getRandomLottoNumbers() {
    return this.#randomLottoNumbers;
  }

  setPickLottoNumber(pickLottoNumber) {
    this.#pickLottoNumber = pickLottoNumber;
  }

  getPickLottoNumber() {
    return this.#pickLottoNumber;
  }

  setPickBonusNumber(pickBonusNumber) {
    this.#pickBonusNumber = pickBonusNumber;
  }

  getPickBonusNumber() {
    return this.#pickBonusNumber;
  }
}

export default LottoModel;
