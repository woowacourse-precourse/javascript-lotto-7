import { MissionUtils } from '@woowacourse/mission-utils';
import {
  validatePurchaseAmount,
  validateWinningNumbers,
  validateBonusNumber,
  parseWinningNumbers,
} from '../utils/validator.js';

export class Input {
  async inputPurchaseAmount() {
    const price = await this.readLineAsync('구입금액을 입력해 주세요.\n');
    validatePurchaseAmount(price);
    return Number(price);
  }

  async inputWinningNumbers() {
    const numbers = await this.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const winningNumbers = parseWinningNumbers(numbers);
    validateWinningNumbers(winningNumbers);
    return winningNumbers;
  }

  async inputBonusNumber(winningNumbers = []) {
    const number = await this.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
    const bonusNumber = Number(number);
    validateBonusNumber(bonusNumber, winningNumbers);
    return bonusNumber;
  }

  async inputLottoAndBonus() {
    try {
      const winningNumbers = await this.inputWinningNumbers();
      const bonusNumber = await this.inputBonusNumber(winningNumbers);
      return { winningNumbers, bonusNumber };
    } catch (error) {
      console.error(error.message);
      return await this.inputLottoAndBonus();
    }
  }

  readLineAsync = async (message) => {
    return await MissionUtils.Console.readLineAsync(message);
  };
}
