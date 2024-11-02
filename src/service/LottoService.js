import { RANK_PRICE, SEPARATOR, RANK_NAMES } from '../constant/system.js';
import Validator from '../Validator.js';
import UserModel from '../model/UserModel.js';
import WinningLottoModel from '../model/WinningLottoModel.js';

export default class LottoService {
  constructor() {
    this.userModel = null;
    this.winningLottoModel = null;
  }

  createUserModel(price) {
    Validator.price(price);
    this.userModel = new UserModel(price);
  }

  getLottosInformation() {
    const { lottoLength, lottosNumberArray } =
      this.userModel.getLottosInformation();
    return { lottoLength, lottosNumberArray };
  }

  createWinningLottoModel(numberString) {
    const numbers = numberString
      .split(SEPARATOR)
      .map((number) => Number(number));

    Validator.winningNumbers(numbers);
    this.winningLottoModel = new WinningLottoModel(numbers);
  }

  appendBonusNumber(bonusNumber) {
    this.winningLottoModel.setBonusNumber(bonusNumber);
  }

  getStatistics() {
    const rankMap = this.#getRankMap();

    this.userModel.getSortedLottosNumberArray().forEach((lottoNumbers) => {
      const rank = this.winningLottoModel.calculateRank(lottoNumbers);
      if (rank) rankMap.set(rank, rankMap.get(rank) + 1);
    });

    return rankMap;
  }

  #getRankMap() {
    return new Map(Object.values(RANK_NAMES).map((rank) => [rank, 0]));
  }

  getRateOfReturn(rankMap) {
    let totalPrize = 0;
    rankMap.forEach((count, rank) => {
      totalPrize += RANK_PRICE[rank] * count;
    });

    return this.userModel.caculateRateOfReturn(totalPrize);
  }
}
