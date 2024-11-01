import { MissionUtils } from '@woowacourse/mission-utils';

class InputView {
  async readInput(string) {
    let inputValue = '';

    inputValue = await MissionUtils.Console.readLineAsync(string);

    return inputValue;
  }

  async readPurchaseAmount() {
    const purchaseAmountInput = await this.readInput(
      '구입금액을 입력해 주세요.'
    );

    this.validatePurchaseAmount(purchaseAmountInput);

    return Number(purchaseAmountInput);
  }

  validatePurchaseAmount(amount) {
    if (amount === '') {
      throw new Error('[ERROR] 구입 금액을 입력해야 합니다.');
    }

    const amountValue = Number(amount);

    if (Number.isNaN(amountValue)) {
      throw new Error('[ERROR] 구입 금액은 숫자여야 합니다.');
    }

    if (amountValue % 1000 !== 0) {
      throw new Error(
        '[ERROR] 구입 금액은 1,000원으로 나누어 떨어져야 합니다.'
      );
    }
  }

  async readWinningNumbers() {
    const winningNumbersInput = await this.readInput(
      '당첨 번호를 입력해 주세요.'
    );

    if (winningNumbersInput.trim() === '') {
      throw new Error('[ERROR] 당첨 번호를 입력해야 합니다.');
    }

    const winningNumbers = winningNumbersInput
      .split(',')
      .map(name => Number(name.trim()));

    this.validateWinningNumbers(winningNumbers);

    return winningNumbers;
  }

  validateWinningNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 당첨 번호는 반드시 6개여야 합니다.');
    }

    numbers.forEach(number => {
      if (isNaN(number)) {
        throw new Error('[ERROR] 당첨 번호는 숫자여야 합니다.');
      }

      if (number < 1 || number > 45) {
        throw new Error('[ERROR] 당첨 번호는 1~45 사이여야 합니다.');
      }
    });

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error('[ERROR] 중복된 당첨 번호가 있습니다.');
    }
  }

  async readBonusNumber(winningNumbers) {
    const bonusNumberInput = await this.readInput(
      '보너스 번호를 입력해 주세요.'
    );

    this.validateBonusNumber(winningNumbers, bonusNumberInput);

    return Number(bonusNumberInput);
  }

  validateBonusNumber(winningNumbers, bonusNumber) {
    if (bonusNumber === '') {
      throw new Error('[ERROR] 보너스 번호를 입력해야 합니다.');
    }

    if (bonusNumber.split(',').length !== 1) {
      throw new Error('[ERROR] 보너스 번호는 반드시 1개여야 합니다.');
    }

    const bonusNumberValue = Number(bonusNumber);

    if (Number.isNaN(bonusNumberValue)) {
      throw new Error('[ERROR] 보너스 번호는 숫자여야 합니다.');
    }

    if (bonusNumberValue < 1 || bonusNumberValue > 45) {
      throw new Error('[ERROR] 보너스 번호는 1~45 사이여야 합니다.');
    }

    if (winningNumbers.includes(bonusNumberValue)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
  }
}

export default InputView;
