import { intersection, calculatePercentage } from '../Util.js';
import WinningLotto from './WinningLotto.js';
import UserLotto from './UserLotto.js';

export default class LottoService {
  #winningLotto;
  #userLotto;
  #winningInfo = {
    '1st': { match: 6, bonus: 0, price: 2000000000, count: 0 },
    '2nd': { match: 5, bonus: 1, price: 30000000, count: 0 },
    '3rd': { match: 5, bonus: 0, price: 1500000, count: 0 },
    '4th': { match: 4, bonus: 0, price: 50000, count: 0 },
    '5th': { match: 3, bonus: 0, price: 5000, count: 0 },
  };

  setUserLotto(price) {
    this.#userLotto = new UserLotto(price);
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

  getWinningDetails() {
    const userLottoNumbers = this.#userLotto.getNumbers();

    userLottoNumbers.forEach((userLottoNumber) => {
      const rank = this.getRank(userLottoNumber);

      if (rank) {
        this.#winningInfo[rank].count += 1;
      }
    });

    return this.#winningInfo;
  }

  getRank(userLottoNumber) {
    const matchCount = intersection(userLottoNumber, this.#winningLotto.getNumbers()).length;
    const bonusMatch = intersection(userLottoNumber, this.#winningLotto.getbonusNumber()).length;
    let rank = null;

    Object.entries(this.#winningInfo).forEach(([key, value]) => {
      if (matchCount === value.match && bonusMatch === value.bonus) {
        rank = key;
      }
    });

    return rank;
  }

  getWinningRate() {
    let totalPrice = 0;

    for (const rank in this.#winningInfo) {
      totalPrice += this.#winningInfo[rank].price * this.#winningInfo[rank].count;
    }

    return calculatePercentage(totalPrice, this.#userLotto.getPerchasedAmount(), 1);
  }
}
