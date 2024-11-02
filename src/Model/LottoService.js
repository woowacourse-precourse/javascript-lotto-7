import { intersection, calculatePercentage } from '../Util.js';
import WinningLotto from './WinningLotto.js';
import UserLotto from './UserLotto.js';

export default class LottoService {
  #winningLotto;
  #userLotto;
  #winningInfo = {
    1: { match: 6, price: 2000000000, count: 0 },
    2: { match: 5, price: 30000000, count: 0 },
    3: { match: 5, price: 1500000, count: 0 },
    4: { match: 4, price: 50000, count: 0 },
    5: { match: 3, price: 5000, count: 0 },
  };

  buyUserLotto(price) {
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
      const rank = this.#getRank(userLottoNumber);

      if (rank) {
        this.#winningInfo[rank].count += 1;
      }
    });

    return this.#winningInfo;
  }

  getWinningRate() {
    let totalPrice = 0;

    for (const rank in this.#winningInfo) {
      totalPrice += this.#winningInfo[rank].price * this.#winningInfo[rank].count;
    }

    return calculatePercentage(totalPrice, this.#userLotto.getPerchasedAmount(), 1);
  }

  #getRank(userLottoNumber) {
    const matchCount = intersection(userLottoNumber, this.#winningLotto.getNumbers()).length;

    if (matchCount < 3) return 0;
    if (matchCount === 3) return 5;
    if (matchCount === 4) return 4;
    if (matchCount === 5) {
      if (intersection(userLottoNumber, this.#winningLotto.getbonusNumber())) {
        return 2;
      }
      return 3;
    }
    if (matchCount === 6) return 1;

    return 0;
  }
}
