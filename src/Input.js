import { Console } from '@woowacourse/mission-utils';
import Validator from './Validator.js';

class Input {
  constructor() {
    this.validator = new Validator();
  }

  inputMoney() {
    return this.input('구입금액을 입력해 주세요.', input =>
      this.parseMoney(input),
    );
  }

  parseMoney(moneyInput) {
    this.validator.validateMoney(moneyInput);
    return Number(moneyInput);
  }

  async inputLottoNumber() {
    return this.input('당첨 번호를 입력해 주세요.', input =>
      this.parseLottos(input),
    );
  }

  parseLottos(lottoNumberInput) {
    const lottoNumber = lottoNumberInput
      .split(',')
      .map(number => Number(number));
    this.validator.validateLotto(lottoNumber);
    return lottoNumber;
  }

  async inputBonusNumber(lottoNumber) {
    return this.input('보너스 번호를 입력해 주세요.', input =>
      this.parseBonusNumber(input, lottoNumber),
    );
  }

  parseBonusNumber(bonusNumberInput, lottoNumber) {
    this.validator.validateBonusNumber(bonusNumberInput, lottoNumber);
    const bonusNumber = Number(bonusNumberInput);
    return bonusNumber;
  }

  async input(msg, parseFunction) {
    while (true) {
      try {
        const input = await Console.readLineAsync(`${msg}\n`);
        return parseFunction(input);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default Input;
