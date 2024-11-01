import { Random } from '@woowacourse/mission-utils';
import {
  RANK_PRICE,
  PRICE_RANGE,
  SEPARATOR,
  RANK_NAMES,
  NUMBER_RANGE,
  LOTTO_NUMBER_LENGTH,
} from '../constant/system.js';
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
      const randomNumber = Random.pickUniqueNumbersInRange(
        NUMBER_RANGE.MIN,
        NUMBER_RANGE.MAX,
        LOTTO_NUMBER_LENGTH,
      );
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
      const rankName = this.#getRankName(
        lotto,
        winningLottoNumbers,
        bonusNumber,
      );
      if (rankName) rankMap.set(rankName, rankMap.get(rankName) + 1);
    });

    return rankMap;
  }

  getRateOfReturn(rankMap) {
    const totalPrize = this.#getTotalPrize(rankMap);
    return ((totalPrize / this.userModel.getPrice()) * 100).toFixed(1);
  }

  #getRankMap() {
    return new Map(Object.values(RANK_NAMES).map((rankName) => [rankName, 0]));
  }

  #getRankName(lotto, winningLottoNumbers, bonusNumber) {
    const lottoNumbers = lotto.getNumbers();

    const intersectionLottoNumbers = lottoNumbers.filter((number) =>
      winningLottoNumbers.includes(number),
    );

    const matchCount = intersectionLottoNumbers.length;
    const determinRank = this.#determineRank(
      matchCount,
      lottoNumbers,
      bonusNumber,
    );
    return determinRank;
  }

  #determineRank(matchCount, lottoNumbers, bonusNumber) {
    if (matchCount === RANK_NAMES.SIX) return RANK_NAMES.SIX;
    if (matchCount === RANK_NAMES.FIVE && lottoNumbers.includes(bonusNumber))
      return RANK_NAMES.FIVE_BONUS;
    if (matchCount === RANK_NAMES.FIVE) return RANK_NAMES.FIVE;
    if (matchCount === RANK_NAMES.FOUR) return RANK_NAMES.FOUR;
    if (matchCount === RANK_NAMES.THREE) return RANK_NAMES.THREE;
    return null;
  }

  #getTotalPrize(rankMap) {
    let totalPrize = 0;

    rankMap.forEach((count, rankName) => {
      totalPrize += RANK_PRICE[rankName] * count;
    });

    return totalPrize;
  }
}
