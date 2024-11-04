import Lotto from '../Lotto.js';
import { RANK_NAME } from '../constant/system.js';
import Validator from '../Validator.js';

export default class WinningLottoModel extends Lotto {
  #bonusNumber;

  constructor(numbers) {
    super(numbers);
    this.#bonusNumber = null;
  }

  setBonusNumber(bonusNumber) {
    Validator.bonusNumber(this.getNumbers(), bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  calculateRank(lottoNumbers) {
    const intersectionLottoNumbers = lottoNumbers.filter((number) =>
      this.getNumbers().includes(number),
    );

    const matchCount = intersectionLottoNumbers.length;
    const rank = this.#determineRank(matchCount, lottoNumbers);
    return rank;
  }

  #determineRank(matchCount, lottoNumbers) {
    if (
      matchCount === RANK_NAME.FIVE &&
      lottoNumbers.includes(this.#bonusNumber)
    )
      return RANK_NAME.FIVE_BONUS;
    if (matchCount < RANK_NAME.THREE) return null;
    return matchCount;
  }
}
