import { Random } from '@woowacourse/mission-utils';
import { RANK_PRICE, PRICE_RANGE, SEPARATOR } from '../constant/system.js';
import Validator from '../Validator.js';
import UserModel from '../model/UserModel.js';
import Lotto from '../Lotto.js';
import WinningLottoModel from '../model/WinningLottoModel.js';

export default class LottoService {
  constructor() {
    this.userModel = null;
    this.winningLottoModel = null;
  }

  createUserModel(price) {
    Validator.price(price);

    this.userModel = new UserModel(price);
    const lottoLength = price / PRICE_RANGE.MIN;

    for (let i = 0; i < lottoLength; i += 1) {
      const randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.userModel.createLotto(new Lotto(randomNumber));
    }
  }

  getLottosInformation() {
    const lottoLength = this.userModel.getLottos().length;
    const lottoNumbersArray = this.userModel
      .getLottos()
      .map((lotto) => lotto.getNumbers().sort((a, b) => a - b));

    return { lottoLength, lottoNumbersArray };
  }

  createWinningLottoModel(numberString) {
    const numbers = numberString
      .split(SEPARATOR)
      .map((number) => Number(number));
    Validator.winningNumbers(numbers);

    this.winningLottoModel = new WinningLottoModel(numbers);
  }

  appendBonusNumber(bonusNumber) {
    Validator.bonusNumber(this.winningLottoModel.getNumbers(), bonusNumber);
    this.winningLottoModel.setBonusNumber(bonusNumber);
  }

  getStatistics() {
    const rankMap = this.#getRankMap();
    const winningLottoNumbers = this.winningLottoModel.getNumbers();
    const bonusNumber = this.winningLottoModel.getBonusNumber();

    this.userModel.getLottos().forEach((lotto) => {
      const rank = this.#getRank(lotto, winningLottoNumbers, bonusNumber);
      if (rank) rankMap.set(rank, rankMap.get(rank) + 1);
    });

    return rankMap;
  }

  getRateOfReturn(rankMap) {
    const totalPrize = this.#getTotalPrize(rankMap);
    return ((totalPrize / this.userModel.getPrice()) * 100).toFixed(1);
  }

  #getRankMap() {
    return new Map([
      [3, 0],
      [4, 0],
      [5, 0],
      ['5+', 0],
      [6, 0],
    ]);
  }

  #getRank(lotto, winningLottoNumbers, bonusNumber) {
    const lottoNumbers = lotto.getNumbers();

    const intersectionLottoNumbers = lottoNumbers.filter((number) =>
      winningLottoNumbers.includes(number),
    );

    const rank = intersectionLottoNumbers.length;
    if (rank === 5 && lottoNumbers.includes(bonusNumber)) return '5+';
    if (rank >= 3) return rank;
    return null;
  }

  #getTotalPrize(rankMap) {
    const prizes = Object.values(RANK_PRICE);
    let totalPrize = 0;

    Array.from(rankMap.values()).forEach((count, index) => {
      totalPrize += prizes[index] * count;
    });

    return totalPrize;
  }
}
