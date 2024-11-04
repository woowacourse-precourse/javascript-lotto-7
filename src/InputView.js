import { Console } from '@woowacourse/mission-utils';

import { ERROR_MESSAGE, INPUT_MESSAGE, LOTTO } from './constants/index.js';

class InputView {
  async readPurchasePrice() {
    try {
      const purchasePrice = await Console.readLineAsync(INPUT_MESSAGE.price);

      this.#validatePrice(purchasePrice);

      return Number(purchasePrice);
    } catch (error) {
      Console.print(error.message);
      return await this.readPurchasePrice();
    }
  }

  #validatePrice(purchasePrice) {
    if (isNaN(purchasePrice)) {
      throw new Error(ERROR_MESSAGE.price.notNumber);
    }

    const isValidAmountUnit = Number(purchasePrice) % LOTTO.ticketPrice === 0;
    if (!isValidAmountUnit) {
      throw new Error(ERROR_MESSAGE.price.invaildAmountUnit);
    }
  }

  async readWinningNumbers() {
    try {
      const input = await Console.readLineAsync(INPUT_MESSAGE.winningNumbers);
      const winningNumbers = input //
        .split(',')
        .map((number) => Number(number.trim()));

      this.#validateWinningNumbers(winningNumbers);

      return winningNumbers;
    } catch (error) {
      Console.print(error.message);
      return await this.readWinningNumbers();
    }
  }

  #validateWinningNumbers(numbers) {
    const invalidLength = numbers.length !== LOTTO.numberCount;
    if (invalidLength) {
      throw new Error(ERROR_MESSAGE.winningNumbers.length);
    }

    const isNotNumber = numbers.some(isNaN);
    if (isNotNumber) {
      throw new Error(ERROR_MESSAGE.winningNumbers.notNumber);
    }

    const isInvalidRange = numbers.some(LOTTO.isInvalidRange);
    if (isInvalidRange) {
      throw new Error(ERROR_MESSAGE.winningNumbers.range);
    }

    const winningNumbersSet = new Set(numbers);
    const hasDuplicateNumber = winningNumbersSet.size < LOTTO.numberCount;
    if (hasDuplicateNumber) {
      throw new Error(ERROR_MESSAGE.winningNumbers.duplicate);
    }
  }

  async readBonusNumber(winningNumbers) {
    try {
      const input = await Console.readLineAsync(INPUT_MESSAGE.bonus);
      const bonus = Number(input);

      this.#validateBonusNumber(winningNumbers, bonus);

      return bonus;
    } catch (error) {
      Console.print(error.message);
      return await this.readBonusNumber(winningNumbers);
    }
  }

  #validateBonusNumber(winningNumbers, bonus) {
    if (isNaN(bonus)) {
      throw new Error(ERROR_MESSAGE.bonusNumber.notNumber);
    }

    const isInvalidRange = LOTTO.isInvalidRange(bonus);
    if (isInvalidRange) {
      throw new Error(ERROR_MESSAGE.bonusNumber.range);
    }

    if (this.#isBonusNumberDuplicate(winningNumbers, bonus)) {
      throw new Error(ERROR_MESSAGE.bonusNumber.duplicate);
    }
  }

  #isBonusNumberDuplicate(winningNumbers, bonus) {
    const winningNumbersWithBonusSet = new Set([...winningNumbers, bonus]);

    return winningNumbersWithBonusSet.size === LOTTO.numberCount;
  }
}

export default InputView;
