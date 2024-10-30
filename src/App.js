import Validator from './utils/Validator.js';
import IOhandler from './utils/IOhandler.js';

class App {
  async run() {
    const money = await this.validateInputHandler(
      '구입금액을 입력해 주세요.',
      Validator.validatePurchaseAmount,
    );

    const winningNumber = await this.validateInputHandler(
      '당첨 번호를 입력해 주세요.',
      Validator.validateWinningNumbers,
    );

    const bonusNumber = await this.validateInputHandler(
      '보너스 번호를 입력해 주세요.',
      (input) => Validator.validateBonusNumber(input, winningNumber),
    );

    // 유효한 입력을 받은 후 로직 계속...
  }

  async validateInputHandler(message, validator) {
    while (true) {
      try {
        const input = IOhandler.input(message);
        validator(input);
        return input;
      } catch (error) {
        IOhandler.print(error.message);
      }
    }
  }
}

export default App;
