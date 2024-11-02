import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES } from '../datas/error.js';

export class Input {
  async inputPurchaseAmount() {
    const price = await this.readLineAsync('구입금액을 입력해 주세요.\n');
    this.validatePurchaseAmount(price);
    return Number(price);
  }

  async inputWinningNumbers() {
    const numbers = await this.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const winningNumbers = this.parseWinningNumbers(numbers);
    this.validateWinningNumbers(winningNumbers);
    return winningNumbers;
  }

  async inputBonusNumber(winningNumbers = []) {
    const number = await this.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
    const bonusNumber = Number(number);
    this.validateBonusNumber(bonusNumber, winningNumbers);
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

  validatePurchaseAmount = (price) => {
    if (!/^\d+$/.test(price)) {
      throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    }

    const amount = Number(price);

    if (amount <= 0 || amount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    }
  };

  parseWinningNumbers = (numbers) => {
    return numbers.split(',').map((num) => Number(num.trim()));
  };

  validateWinningNumbers = (winningNumbers) => {
    if (
      new Set(winningNumbers).size !== 6 ||
      winningNumbers.some((num) => num < 1 || num > 45)
    ) {
      throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBERS);
    }
  };

  validateBonusNumber = (bonusNumber, winningNumbers) => {
    if (
      bonusNumber < 1 ||
      bonusNumber > 45 ||
      winningNumbers.includes(bonusNumber)
    ) {
      throw new Error(
        bonusNumber < 1 || bonusNumber > 45
          ? ERROR_MESSAGES.INVALID_BONUS_NUMBER
          : ERROR_MESSAGES.BONUS_DUPLICATE
      );
    }
  };
}
