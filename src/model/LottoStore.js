import { Random } from '@woowacourse/mission-utils';
import Validator from '../utils/validator.js';

class LottoStore {
  #amount;
  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
    this.lottos = this.#createLottos(amount);
  }

  #validate(amount) {
    Validator.validatePurchaseAmount(amount);
  }

  #createLottos() {
    const LOTTO_PRICE = 1000;
    // 발급할 로또의 갯수 계산
    const lottosLength = this.#amount / LOTTO_PRICE;

    return Array.from({ length: lottosLength }, () => {
      const randomNumbers = this.#generateUniqueNumbers();
      return new Lotto(randomNumbers);
    });
  }
  #generateUniqueNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  getLottos() {
    return this.lottos;
  }
}

export default LottoStore;
