import { Console } from '@woowacourse/mission-utils';
import Input from '../view/Input.js';
import Money from '../validation/Money.js';
import { countLotto } from '../utils/index.js';
import LOTTO_MESSAGE from '../constants/LottoMessage.js';

class LottoMachine {
  async start() {
    const money = await this.handleMoneyInput();
    // 생성할 로또 갯수 계산 & 출력
    const numOfLotto = countLotto(money);
    Console.print(LOTTO_MESSAGE.PRINT_LOTTO_COUNT(numOfLotto));
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
