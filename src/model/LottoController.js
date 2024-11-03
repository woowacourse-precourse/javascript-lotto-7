import { PRIZE_CONFIG } from '../constant/config.js';
import Lotto from '../Lotto.js';
import { getUniqueNumbersInRange } from '../util/random.js';

export default class LottoController {
  #lottoList;
  #winningLottoNumbers;
  #winningLottoBonusNumber;

  constructor(amount) {
    const lottoNumbers = Array.from({ length: amount }, () => getUniqueNumbersInRange().sort((a, b) => a - b));

    this.#lottoList = lottoNumbers.map((numbers) => new Lotto(numbers));
  }

  getLottoList() {
    return this.#lottoList.map((lotto) => lotto.getNumbers());
  }

  setWinningNumbers(lottoNumbers, lottoBonusNumber) {
    this.#winningLottoNumbers = lottoNumbers;
    this.#winningLottoBonusNumber = lottoBonusNumber;
  }

  compare() {
    const matchResult = this.#lottoList.map((lotto) =>
      lotto.match(this.#winningLottoNumbers, this.#winningLottoBonusNumber),
    );
    const matchResultMap = this.#initializeResultMap();

    this.#calculateResult(matchResult, matchResultMap);

    return {
      result: Array.from(matchResultMap).slice(1),
      sum: Array.from(matchResultMap).reduce(
        (acc, [rank, amount]) => acc + PRIZE_CONFIG[PRIZE_CONFIG.length - rank].prize * amount,
        0,
      ),
      amount: this.#lottoList.length,
    };
  }

  #initializeResultMap() {
    const matchResultMap = new Map();

    for (let i = 0; i < PRIZE_CONFIG.length; i += 1) {
      matchResultMap.set(PRIZE_CONFIG.length - i, 0);
    }

    return matchResultMap;
  }

  #calculateResult(matchResult, matchResultMap) {
    matchResult.forEach(({ matchAmount, isBonus }) => {
      const rank = this.#matchOption(matchAmount, isBonus);
      const prev = matchResultMap.get(rank);

      matchResultMap.set(rank, prev + 1);
    });
  }

  #matchOption(matchAmount, isBonus) {
    if (matchAmount === 6) return 1;
    if (matchAmount === 5 && isBonus) return 2;
    if (matchAmount === 5) return 3;
    if (matchAmount === 4) return 4;
    if (matchAmount === 3) return 5;
    return 6;
  }
}
