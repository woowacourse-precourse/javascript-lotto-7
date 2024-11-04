import { Console } from '@woowacourse/mission-utils';
import { LOTTO_PRICE, LOTTO_PRIZES, LOTTO_MATCH_TEXT, RESULT_KEYS } from '../constant/index.js';
import WinningResult from './WinningResult.js';

class Game {
  #purchasedLottoNumbersList;
  #winningNumbers;
  #bonusNumber;
  #gameResult = {
    [RESULT_KEYS.THREE_MATCH]: new WinningResult(LOTTO_MATCH_TEXT.THREE_MATCH, LOTTO_PRIZES.THREE_MATCH),
    [RESULT_KEYS.FOUR_MATCH]: new WinningResult(LOTTO_MATCH_TEXT.FOUR_MATCH, LOTTO_PRIZES.FOUR_MATCH),
    [RESULT_KEYS.FIVE_MATCH]: new WinningResult(LOTTO_MATCH_TEXT.FIVE_MATCH, LOTTO_PRIZES.FIVE_MATCH),
    [RESULT_KEYS.FIVE_MATCH_WITH_BONUS]: new WinningResult(LOTTO_MATCH_TEXT.FIVE_MATCH_WITH_BONUS, LOTTO_PRIZES.FIVE_MATCH_WITH_BONUS),
    [RESULT_KEYS.SIX_MATCH]: new WinningResult(LOTTO_MATCH_TEXT.SIX_MATCH, LOTTO_PRIZES.SIX_MATCH),
  };

  constructor(purchasedLottos, winningLotto) {
    this.#purchasedLottoNumbersList = purchasedLottos.getLottos().map((lotto) => lotto.getNumbers());
    this.#winningNumbers = winningLotto.getWinningNumbers();
    this.#bonusNumber = winningLotto.getBonusNumber();
  }

  #getMatchCount(purchasedLottoNumbers) {
    return purchasedLottoNumbers.filter((num) => this.#winningNumbers.includes(num)).length;
  }

  #getResultKey(matchCount, purchasedLottoNumbers) {
    if (matchCount < 3) return null;
    if (matchCount === 3) return RESULT_KEYS.THREE_MATCH;
    if (matchCount === 4) return RESULT_KEYS.FOUR_MATCH;
    if (matchCount === 5 && purchasedLottoNumbers.includes(this.#bonusNumber)) {
      return RESULT_KEYS.FIVE_MATCH_WITH_BONUS;
    }
    if (matchCount === 5) return RESULT_KEYS.FIVE_MATCH;
    if (matchCount === 6) return RESULT_KEYS.SIX_MATCH;

    return null;
  }

  #updateWinningResultCount(key) {
    if (key) {
      this.#gameResult[key].incrementCount();
    }
  }

  #calculateResult() {
    this.#purchasedLottoNumbersList.forEach((purchasedLottoNumbers) => {
      const matchCount = this.#getMatchCount(purchasedLottoNumbers);
      const key = this.#getResultKey(matchCount, purchasedLottoNumbers);
      this.#updateWinningResultCount(key);
    });
  }

  #calculateReturnRate() {
    const ticketCount = this.#purchasedLottoNumbersList.length;
    const totalPrize = Object.values(this.#gameResult).reduce((total, result) => total + result.totalPrize, 0);
    const returnRateRatio = totalPrize / (ticketCount * LOTTO_PRICE);
    return (returnRateRatio * 100).toFixed(1);
  }

  #printResult() {
    Console.print('당첨 통계');
    Console.print('---');

    Object.values(this.#gameResult).forEach(({ matchText, prize, count }) => {
      Console.print(`${matchText} (${prize.toLocaleString()}원) - ${count}개`);
    });

    const returnRate = this.#calculateReturnRate();
    Console.print(`총 수익률은 ${returnRate}%입니다.`);
  }

  play() {
    this.#calculateResult();
    this.#printResult();
  }
}

export default Game;
