import { Random } from '@woowacourse/mission-utils';
import Validator from '../utils/validator.js';
import Lotto from './Lotto.js';

class LottoStore {
  #amount;
  #count;
  #lottos;

  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
    this.#count = this.#calculateCount(this.#amount);
    this.#lottos = this.#createLottos(this.#count);
  }

  #validate(amount) {
    Validator.validatePurchaseAmount(amount);
  }

  #calculateCount(amount) {
    const LOTTO_PRICE = 1000;

    return Math.floor(amount / LOTTO_PRICE);
  }

  #createLottos(count) {
    return Array.from({ length: count }, () => {
      const randomNumbers = this.#generateUniqueNumbers();
      return new Lotto(randomNumbers);
    });
  }

  #generateUniqueNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  getLottos() {
    return this.#lottos;
  }

  getCount() {
    return this.#count;
  }
}

export default LottoStore;
