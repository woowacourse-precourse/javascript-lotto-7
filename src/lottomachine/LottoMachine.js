import { Console } from '@woowacourse/mission-utils';
import Input from '../view/Input.js';
import Output from '../view/Output.js';
import Money from '../validation/Money.js';
import { countLotto } from '../utils/index.js';
import LOTTO_MESSAGE from '../constants/LottoMessage.js';
import LottoController from './LottoController.js';
import Lotto from '../Lotto.js';
import BonusNumber from '../validation/BonusNumber.js';

class LottoMachine {
  winningNumbers;

  bonusNumber;

  money;

  constructor() {
    this.result = {};
  }

  async start() {
    const money = await this.handleMoneyInput(); // TODO : this.money로 변경
    const numOfLotto = countLotto(money);
    Output.printNumOfLotto(numOfLotto);

    const lottoController = new LottoController(numOfLotto);
    Output.printLottos(lottoController.lottos);

    this.winningNumbers = await this.handleWinningNumberInput();
    this.bonusNumber = await this.handleBonusNumberInput();

    // controller를 사용해서 매칭 시작
    lottoController.checkNumberMatch(this.winningNumbers);
    lottoController.checkBonusMatch(this.bonusNumber);
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
        return validNumbers.getNumbers();
      } catch (error) {
        Console.print(error);
      }
    }
  }

  async handleBonusNumberInput() {
    let bonusNumber;
    while (true) {
      bonusNumber = await Input.requestBonusNumber();
      try {
        const validBonusNumber = BonusNumber.validate(
          bonusNumber,
          this.winningNumbers,
        );
        return validBonusNumber;
      } catch (error) {
        Console.print(error);
      }
    }
  }
}
export default LottoMachine;
