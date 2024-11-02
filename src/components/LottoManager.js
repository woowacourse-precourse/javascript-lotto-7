import InputRepeat from '../utils/io/InputRepeat.js';
import Output from '../utils/io/Output.js';
import LottoMachine from './LottoMachine.js';
import validateLotto from '../utils/validation/validateLotto.js';
import INPUT from '../constants/InputMessage.js';
import { getValidValue } from '../utils/StringUtils.js';
import validateBonus from '../utils/validation/validateBonus.js';
import RULES from '../constants/Rules.js';
import { lottoMatchResult } from '../utils/LottoMatchResult.js';

class LottoManager {
  #winningLotto = [];
  #bonusNumber = 0;

  constructor(purchaedPrice) {
    this.machine = new LottoMachine(purchaedPrice);
  }

  printPurchasedLotto() {
    const lottoList = this.machine.getLottoList();
    const numberList = lottoList.map((lotto) => lotto.getNumbers());

    Output.print(`${lottoList.length}개를 구매했습니다.`);
    Output.printArrayWithComma(numberList);
  }

  printLottoResult() {
    const lottoList = this.machine.getLottoList();
    const matchObj = this.matchLottos(
      lottoList,
      this.#winningLotto,
      this.#bonusNumber,
    );
    const rateOfReturn = this.calculateRateOfReturn(matchObj);

    lottoMatchResult(matchObj, rateOfReturn);
  }

  calculateRateOfReturn(matchObj) {
    const totalPrice = Object.entries(matchObj).reduce(
      (acc, [matchCount, count]) => {
        const price = Number(RULES.PRICE[matchCount] || 0);
        return acc + price * (count || 0);
      },
      0,
    );

    const profit =
      (totalPrice / (this.machine.getLottoList().length * RULES.UNIT)) * 100;

    return profit.toFixed(1);
  }

  matchLottos(lottos, winningLotto, bonusNumber) {
    const matchObj = {
      3: 0,
      4: 0,
      5: 0,
      5.5: 0,
      6: 0,
    };

    lottos.forEach((lotto) => {
      matchObj[lotto.match(winningLotto, bonusNumber)] += 1;
    });

    return matchObj;
  }

  async setWinningLotto() {
    const lottoWinningNumbers = getValidValue(
      await InputRepeat(INPUT.LOTTO_WINNING_NUMBERS, validateLotto),
      RULES.DELIMITER,
    ).map(Number);

    const bonusNumber = await InputRepeat(INPUT.BONUS_NUMBER, (input) =>
      validateBonus(input, lottoWinningNumbers),
    );

    this.#bonusNumber = bonusNumber;
    this.#winningLotto = lottoWinningNumbers;
  }
}

export default LottoManager;
