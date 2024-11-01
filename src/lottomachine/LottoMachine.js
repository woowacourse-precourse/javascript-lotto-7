import { Console } from '@woowacourse/mission-utils';
import Input from '../view/Input.js';
import Money from '../validation/Money.js';

class LottoMachine {
  async start() {
    // input 입력받기
    const money = this.handleMoney(await Input.requestMoney());
  }

  handleMoney(money) {
    try {
      Money.validate(money);
      return money;
    } catch (error) {
      Console.print(error);
      this.retryInput('money');
    }
  }

  async retryInput(type) {
    if (type === 'money') {
      return this.handleMoney(await Input.requestMoney());
    }
  }
}
export default LottoMachine;
