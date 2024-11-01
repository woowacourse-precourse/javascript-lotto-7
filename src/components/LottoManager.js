import InputRepeat from '../utils/io/InputRepeat.js';
import Output from '../utils/io/Output.js';
import LottoMachine from './LottoMachine.js';
import validateLotto from '../utils/validation/validateLotto.js';
import INPUT from '../constants/InputMessage.js';
import { getValidValue } from '../utils/StringUtils.js';
import validateBonus from '../utils/validation/validateBonus.js';
import RULES from '../constants/Rules.js';

class LottoManager {
  #winningLotto = [];
  #bonusNumber = 0;

  constructor(purchaedPrice) {
    this.machine = new LottoMachine(purchaedPrice);
  }

  printPurchasedLotto() {
    const lottoList = this.machine.getLottoList();
    const numberList = lottoList.map((lotto) => lotto.getNumbers());

    Output.print(`\n${lottoList.length}개를 구매했습니다.`);
    Output.printArrayWithComma(numberList);
    Output.print('');
  }

  setWinningLotto(lottoWinningNumbers) {
    this.#winningLotto = getValidValue(lottoWinningNumbers, RULES.DELIMITER);
  }

  setBonusNumber(bonusNumber) {
    this.#bonusNumber = bonusNumber;
  }

  getWinningLotto() {
    return this.#winningLotto;
  }

  async inputWinningLotto() {
    const lottoWinningNumbers = await InputRepeat(
      INPUT.LOTTO_WINNING_NUMBERS,
      validateLotto,
    );

    this.setWinningLotto(lottoWinningNumbers);

    Output.print('');
    const bonusNumber = await InputRepeat(INPUT.BONUS_NUMBER, (input) =>
      validateBonus(input, this.getWinningLotto()),
    );

    this.setBonusNumber(bonusNumber);
  }
}

export default LottoManager;
