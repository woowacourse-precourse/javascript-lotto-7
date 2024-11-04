import { MissionUtils } from '@woowacourse/mission-utils';
import InputValidator from './validator/InputValidator.js';

class InputView {
  constructor() {
    this.validator = new InputValidator();
  }

  async readInput(prompt) {
    return await MissionUtils.Console.readLineAsync(prompt);
  }

  async readPurchaseAmount() {
    const purchaseAmountInput = await this.readInput(
      '구입금액을 입력해 주세요.\n'
    );
    this.validator.validatePurchaseAmount(purchaseAmountInput);
    return Number(purchaseAmountInput);
  }

  async readWinningNumbers() {
    const winningNumbersInput = await this.readInput(
      '당첨 번호를 입력해 주세요.\n'
    );

    this.validator.validateWinningNumbersInput(winningNumbersInput);

    const winningNumbers = winningNumbersInput
      .split(',')
      .map(name => Number(name.trim()));

    this.validator.validateWinningNumbers(winningNumbers);
    return winningNumbers;
  }

  async readBonusNumber(winningNumbers) {
    const bonusNumberInput = await this.readInput(
      '보너스 번호를 입력해 주세요.\n'
    );
    this.validator.validateBonusNumber(winningNumbers, bonusNumberInput);
    return Number(bonusNumberInput);
  }
}

export default InputView;
