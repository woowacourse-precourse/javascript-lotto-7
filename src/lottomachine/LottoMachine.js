import { Console } from '@woowacourse/mission-utils';
import Input from '../view/Input.js';
import Money from '../validation/Money.js';
import { countLotto } from '../utils/index.js';
import LOTTO_MESSAGE from '../constants/LottoMessage.js';
import LottoController from './LottoController.js';

class LottoMachine {
  async start() {
    const money = await this.handleMoneyInput();
    const numOfLotto = countLotto(money);
    Console.print(LOTTO_MESSAGE.PRINT_LOTTO_COUNT(numOfLotto));

    // 갯수 만큼 로또를 발행
    const lottoController = new LottoController(numOfLotto);
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
}
export default LottoMachine;
