import { Console } from '@woowacourse/mission-utils';
import Input from '../view/Input.js';
import Output from '../view/Output.js';
import Money from '../validation/Money.js';
import { countLotto } from '../utils/index.js';
import LOTTO_MESSAGE from '../constants/LottoMessage.js';
import LottoController from './LottoController.js';
import Lotto from '../Lotto.js';

class LottoMachine {
  async start() {
    const money = await this.handleMoneyInput();
    const numOfLotto = countLotto(money);
    Console.print(LOTTO_MESSAGE.PRINT_LOTTO_COUNT(numOfLotto));

    const lottoController = new LottoController(numOfLotto);
    Output.printLottos(lottoController.lottos);

    // 당첨 번호를 입력받는다.
    const winningNumber = await this.handleWinningNumberInput();
  }

  async handleMoneyInput() {
    let money;

    while (true) {
      money = await Input.requestMoney();
      try {
        const validMoney = Money.validate(money);
        return validMoney;
      } catch (error) {
        Console.print(error);
      }
    }
  }

  async handleWinningNumberInput() {
    let numbers;
    while (true) {
      try {
        numbers = await Input.requestWinningNumbers();
        const validNumbers = new Lotto(numbers);
        return validNumbers;
      } catch (error) {
        Console.print(error);
      }
    }
  }
}
export default LottoMachine;
