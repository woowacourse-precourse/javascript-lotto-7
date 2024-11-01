import InputRepeat from '../utils/io/InputRepeat.js';
import Output from '../utils/io/Output.js';
import LottoMachine from './LottoMachine.js';
import validateLotto from '../utils/validation/validateLotto.js';
import INPUT from '../constants/InputMessage.js';
import { getValidValue } from '../utils/StringUtils.js';

class LottoManager {
  #winningLotto = [];
  #bonusNumber = 0;

  constructor(purchaedPrice) {
    this.machine = new LottoMachine(purchaedPrice);
  }

  printPurchasedLotto() {
    const lottoList = this.machine.getLottoList();

    Output.print(`\n${lottoList.length}개를 구매했습니다.`);
    Output.printArrayWithComma(lottoList);
    Output.print('');
  }

  saveWinningLotto(lottoWinningNumbers) {
    this.#winningLotto = getValidValue(lottoWinningNumbers, INPUT.DELIMITER);
  }

  async setWinningLotto() {
    const lottoWinningNumbers = await InputRepeat(
      INPUT.LOTTO_WINNING_NUMBERS,
      validateLotto,
    );

    this.saveWinningLotto(lottoWinningNumbers);
  }
}

export default LottoManager;
