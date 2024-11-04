import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { readUserInput } from './utils/readUserInput.js';
import { isNumber } from './utils/validators.js';
import { throwError } from './utils/throwError.js';
import {
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  LOTTO_DELIMITER,
  LOTTO_LENGTH,
  LOTTO_NUMBER_END,
  LOTTO_NUMBER_START,
  OUTPUT_MESSAGE,
} from './constants.js';

const DEFAULT_GENERATOR = () =>
  Random.pickUniqueNumbersInRange(
    LOTTO_NUMBER_START,
    LOTTO_NUMBER_END,
    LOTTO_LENGTH
  );

export default class LottoMachine {
  static #LOTTO_PRICE = 1000;

  #generator;

  constructor(generator = DEFAULT_GENERATOR) {
    this.#generator = generator;
  }

  async readPurchaseAmount() {
    const purchaseAmount = await readUserInput(
      INPUT_MESSAGE.READ_PURCHASE_AMOUNT,
      [isNumber]
    );
    this.#validatePurchaseAmount(purchaseAmount);
    return Number(purchaseAmount);
  }

  purchaseLottos(purchaseAmount) {
    const lottoCount = this.#calculateLottoCount(purchaseAmount);
    this.#printPurchaseSummary(lottoCount);

    const purchasedLottos = Array.from({ length: lottoCount }, () =>
      this.#createLotto()
    );
    Console.print('');
    return purchasedLottos;
  }

  #validatePurchaseAmount(purchaseAmount) {
    if (purchaseAmount < LottoMachine.#LOTTO_PRICE) {
      throwError(
        ERROR_MESSAGE.LOTTO_CHECK_PURCHASE_AMOUNT(LottoMachine.#LOTTO_PRICE)
      );
    }
  }

  #calculateLottoCount(purchaseAmount) {
    return Math.floor(purchaseAmount / LottoMachine.#LOTTO_PRICE);
  }

  #createLotto() {
    const newLotto = new Lotto(this.#generator());
    this.#printLotto(newLotto);
    return newLotto;
  }

  #printLotto(lotto) {
    Console.print(`[${lotto.getNumbers().join(LOTTO_DELIMITER)}]`);
  }

  #printPurchaseSummary(lottoCount) {
    Console.print(OUTPUT_MESSAGE.PURCHASE_SUMMARY(lottoCount));
  }
}
