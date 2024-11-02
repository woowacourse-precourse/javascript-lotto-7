import Lotto from '../Lotto.js';
import { RANK_NAMES } from '../constant/system.js';
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
    if (matchCount === RANK_NAMES.SIX) return RANK_NAMES.SIX;
    if (
      matchCount === RANK_NAMES.FIVE &&
      lottoNumbers.includes(this.#bonusNumber)
    )
      return RANK_NAMES.FIVE_BONUS;
    if (matchCount === RANK_NAMES.FIVE) return RANK_NAMES.FIVE;
    if (matchCount === RANK_NAMES.FOUR) return RANK_NAMES.FOUR;
    if (matchCount === RANK_NAMES.THREE) return RANK_NAMES.THREE;
    return null;
  }
}
