import { MissionUtils } from '@woowacourse/mission-utils';
import { PURCHASE_AMOUNT_RANGE, LOTTO_PRICE, ERROR_MSG } from '../Constants.js';
import Lotto from './Lotto.js';
import { asendingSort, checkRange, intersection, calculatePercentage } from '../Util.js';
import WinningLotto from './WinningLotto.js';

const WINNING_PRICE_INFO = {
  prize1: 2000000000,
  prize2: 30000000,
  prize3: 1500000,
  prize4: 50000,
  prize5: 5000,
};

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

  getAllWinningDetail() {
    const priceInfo = {
      1: { match: 6, price: 2000000000, count: 0 },
      2: { match: 5, price: 30000000, count: 0 },
      3: { match: 5, price: 1500000, count: 0 },
      4: { match: 4, price: 50000, count: 0 },
      5: { match: 3, price: 5000, count: 0 },
    };

    this.#lottoList.forEach((lotto) => {
      const place = this.getWinningDetail(lotto.getNumbers());
      if (place) {
        priceInfo[place].count += 1;
      }
    });

    return priceInfo;
  }

  getWinningDetail(lotto) {
    const matchCount = intersection(lotto, this.#winningLottoNumber.getNumbers()).length;
    if (matchCount < 3) return 0;
    if (matchCount === 3) return 5;
    if (matchCount === 4) return 4;
    if (matchCount === 5) {
      if (intersection(lotto, this.#winningLottoNumber.getbonusNumber())) return 2;
      return 3;
    }
    if (matchCount === 6) return 1;
  }

  getRateOfReturn(priceInfo) {
    console.log(priceInfo);

    let totalPrice = 0;
    for (const i in priceInfo) {
      totalPrice += priceInfo[i].price * priceInfo[i].count;
    }

    return calculatePercentage(totalPrice, this.#lottoCount * LOTTO_PRICE, 1);
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
