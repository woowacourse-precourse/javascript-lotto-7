import { intersection, calculatePercentage } from '../util/util.js';
import { PRICE_INFO } from '../constants/constants.js';
import WinningLotto from './WinningLotto.js';
import UserLotto from './UserLotto.js';

const DECIMAL_PLACE = 1;

export default class LottoService {
  #winningLotto;
  #userLotto;
  #winningInfo = {
    '1st': 0,
    '2nd': 0,
    '3rd': 0,
    '4th': 0,
    '5th': 0,
  };

  setUserLotto(price) {
    this.#userLotto = new UserLotto(price);
    this.#userLotto.draw();
  }

  setWinningNumber(numbers) {
    this.#winningLotto = new WinningLotto(numbers);
  }

  setBonusNumber(number) {
    this.#winningLotto.setBonusNumber(number);
  }

  getUserLottoNumbers() {
    return this.#userLotto.getNumbers();
  }

  getWinningInfo() {
    const userLottoNumbers = this.#userLotto.getNumbers();

    userLottoNumbers.forEach((userLottoNumber) => {
      const rank = this.getRank(userLottoNumber);
      this.updateWinningInfo(rank);
    });

    return this.#winningInfo;
  }

  updateWinningInfo(rank) {
    if (rank) {
      this.#winningInfo[rank] += 1;
    }
  }

  getRank(userLottoNumber) {
    const matchCount = intersection(userLottoNumber, this.#winningLotto.getNumbers()).length;
    const bonusMatch = intersection(userLottoNumber, this.#winningLotto.getbonusNumber()).length;
    let rank = null;

    Object.entries(PRICE_INFO).forEach(([key, value]) => {
      if (matchCount === value.match && bonusMatch === value.bonus) {
        rank = key;
      }
    });

    return rank;
  }

  getWinningRate() {
    const totalPrice = Object.keys(PRICE_INFO).reduce(
      (acc, rank) => acc + PRICE_INFO[rank].price * this.#winningInfo[rank],
      0,
    );

    return calculatePercentage(totalPrice, this.#userLotto.getPerchasedAmount(), DECIMAL_PLACE);
  }
}
