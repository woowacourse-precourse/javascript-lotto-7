import { Console } from '@woowacourse/mission-utils';
import {
  validateWinningNumbers,
  validateBonusNumber,
} from '../utils/validation.js';

class LottoInput {
  constructor() {
    this.winningNumbers = [];
  }

  async getWinningNumbers() {
    try {
      const LOTTO_NUMBERS = await Console.readLineAsync(
        '\n당첨 번호를 입력해 주세요.\n',
      );
      this.winningNumbers = this.processInput(LOTTO_NUMBERS, true);
      return this.winningNumbers;
    } catch (error) {
      Console.print(error.message);
      return this.getWinningNumbers();
    }
  }

  async getBonusNumber() {
    try {
      const BONUS_NUMBER = await Console.readLineAsync(
        '\n보너스 번호를 입력해 주세요.\n',
      );
      const NUMBER = this.processInput(BONUS_NUMBER, false);
      return NUMBER;
    } catch (error) {
      Console.print(error.message);
      return this.getBonusNumber();
    }
  }

  processInput(input, isWinningNumbers = true) {
    if (isWinningNumbers) {
      validateWinningNumbers(input.trim());
    } else {
      validateBonusNumber(input.trim(), this.winningNumbers);
    }

    return input;
  }
}

export default LottoInput;
