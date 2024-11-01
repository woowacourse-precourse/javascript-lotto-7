import { MissionUtils } from '@woowacourse/mission-utils';
import { PURCHASE_AMOUNT_RANGE, LOTTO_PRICE, ERROR_MSG } from '../Constants.js';
import Lotto from './Lotto.js';
import { asendingSort, checkRange } from '../Util.js';
import WinningLotto from './WinningLotto.js';

export default class LottoService {
  #lottoCount;

  #lottoList = [];

  #winningLottoNumber;

  construct() {
    this.#lottoCount = 0;
  }

  setPurcharedAmount(price) {
    this.#validate(price);
    this.#lottoCount = price / LOTTO_PRICE;
  }

  getlottoCount() {
    return this.#lottoCount;
  }

  drawLottos() {
    for (let i = 0; i < this.#lottoCount; i += 1) {
      let numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers = asendingSort(numbers);

      this.#lottoList.push(new Lotto(numbers));
    }
  }

  getLottos() {
    const lottoNumberList = [];
    this.#lottoList.forEach((lotto) => {
      lottoNumberList.push(lotto.getNumbers());
    });

    return lottoNumberList;
  }

  setWinningNumber(numbers) {
    this.#winningLottoNumber = new WinningLotto(numbers);
  }

  setBonusNumber(number) {
    this.#winningLottoNumber.setBonusNumber(number);
  }

  #validate(price) {
    if (checkRange(price, PURCHASE_AMOUNT_RANGE.min, PURCHASE_AMOUNT_RANGE.max)) {
      throw Error(ERROR_MSG.outOfAmountRange);
    }

    if (price % LOTTO_PRICE) {
      throw Error(ERROR_MSG.priceMisalign);
    }
  }
}
