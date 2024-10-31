import { Random } from '@woowacourse/mission-utils';
import { MATCH_PRICE, PRICE_RANGE, SEPARATOR } from '../constant/system.js';
import Validator from '../Validator.js';
import UserModel from '../model/UserModel.js';
import Lotto from '../Lotto.js';
import WinningLottoModel from '../model/WinningLottoModel.js';

export default class LottoService {
  constructor() {
    this.userModel = null;
    this.winningLottoModel = null;
    this.totalPrize = 0;
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
    const lottoLenght = this.userModel.getLottos().length;
    const lottoNumbers = this.userModel
      .getLottos()
      .map((lotto) => lotto.getNumbers());

    return { lottoLenght, lottoNumbers };
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

  calculateLottosRank() {
    const lottoRankObject = this.#createRankObject();

    this.userModel.getLottos().forEach((lotto) => {
      const rank = this.#calculateRank(lotto, this.winningLottoModel);
      if (rank) lottoRankObject[rank] += 1;
    });

    return lottoRankObject;
  }

  calculateRateOfReturn(rankObject, price) {
    const totalPrize = this.#calculateTotalPrize(rankObject);
    return ((totalPrize / price) * 100).toFixed(1);
  }

  #createRankObject() {
    const lottoRankObject = {
      3: 0,
      4: 0,
      5: 0,
      '5+': 0,
      6: 0,
    };
    return lottoRankObject;
  }

  #calculateRank(lotto, winningLotto) {
    const lottoNumbers = lotto.getNumbers();
    const winningLottoNumbers = winningLotto.getNumbers();
    const bonusNumber = winningLotto.getBonusNumber();

    const intersectionLottoNumbers = lottoNumbers.filter((number) =>
      winningLottoNumbers.includes(number),
    );

    const rank = intersectionLottoNumbers.length;
    if (rank === 5 && lottoNumbers.includes(bonusNumber)) return '5+';
    if (rank >= 3) return rank;
    return null;
  }

  #calculateTotalPrize(rankObject) {
    const prizes = Object.values(MATCH_PRICE);
    let totalPrize = 0;

    Object.values(rankObject).forEach((count, index) => {
      totalPrize += prizes[index] * count;
    });

    return totalPrize;
  }
}
