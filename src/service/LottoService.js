import { RANK_PRICE, SEPARATOR, RANK_NAME } from '../constant/system.js';
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
    const { lottoLength, lottoNumbersArray } =
      this.userModel.getLottosInformation();
    return { lottoLength, lottoNumbersArray };
  }

  createWinningLottoModel(lottoNumbersString) {
    const lottoNumbers = lottoNumbersString
      .split(SEPARATOR)
      .map((number) => Number(number));

    Validator.winningNumbers(lottoNumbers);
    this.winningLottoModel = new WinningLottoModel(lottoNumbers);
  }

  setBonusNumber(bonusNumber) {
    this.winningLottoModel.setBonusNumber(bonusNumber);
  }

  calculateWinningStatistics() {
    const rankMap = this.#getRankMap();

    this.userModel.getLottoNumbersArray().forEach((lottoNumbers) => {
      const rank = this.winningLottoModel.calculateRank(lottoNumbers);
      if (rank) rankMap.set(rank, rankMap.get(rank) + 1);
    });

    return rankMap;
  }

  #getRankMap() {
    return new Map(Object.values(RANK_NAME).map((rank) => [rank, 0]));
  }

  getRateOfReturn(rankMap) {
    let totalPrize = this.#calculateTotalPrize(rankMap);
    return this.userModel.calculateRateOfReturn(totalPrize);
  }

  #calculateTotalPrize(rankMap) {
    let totalPrize = 0;

    rankMap.forEach((count, rank) => {
      totalPrize += RANK_PRICE[rank] * count;
    });

    return totalPrize;
  }
}
