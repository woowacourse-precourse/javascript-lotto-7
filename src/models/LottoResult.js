import { getInterSectionSize } from '../utils/intersection.js';

class LottoResult {
  #winLotto = new Map();
  #winningNumbers;
  #bonusNumber;

  constructor(lottos, winningNumbers) {
    this.#winningNumbers = winningNumbers.getWinningNumbers();
    this.#bonusNumber = winningNumbers.getBonusNumber();
    this.#initWinLotto();
    this.#checkAllLottos(lottos);
  }

  getWinLotto() {
    return this.#winLotto;
  }

  #initWinLotto() {
    this.#winLotto.set(3, 0);
    this.#winLotto.set(4, 0);
    this.#winLotto.set(5, 0);
    this.#winLotto.set('bonus', 0);
    this.#winLotto.set(6, 0);
  }

  #checkAllLottos(lottos) {
    lottos.forEach((lotto) => this.#checkMatch(lotto));
  }

  #checkMatch(lotto) {
    const lottoNumbers = lotto.getNumbers();
    const matchCount = this.#getMatchCount(lottoNumbers);

    if (this.#saveIfFiveBonus(lottoNumbers, matchCount)) return;

    if (matchCount >= 0 && matchCount <= 2) return;

    this.#winLotto.set(matchCount, this.#winLotto.get(matchCount) + 1);
  }

  #saveIfFiveBonus(lottoNumbers, matchCount) {
    if (matchCount !== 5) return false;
    if (!this.#isMatchBonus(lottoNumbers)) return false;
    this.#winLotto.set('bonus', this.#winLotto.get('bonus') + 1);
    return true;
  }

  #getMatchCount(lottoNumbers) {
    return getInterSectionSize(lottoNumbers, this.#winningNumbers);
  }

  #isMatchBonus(lottoNumbers) {
    return lottoNumbers.includes(this.#bonusNumber);
  }
}

export default LottoResult;
