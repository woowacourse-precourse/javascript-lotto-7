import { Random } from '@woowacourse/mission-utils';
import Lotto from './../Lotto.js';

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
    return this.#buyLottoCount / 1000;
  }

  generateRandomLottoNumbers() {
    this.#randomLottoNumbers = [];
    const count = this.getBuyLottoCount();

    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
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

  getPickLottoNumber() {
    return this.#pickBonusNumber;
  }
}

export default LottoModel;
