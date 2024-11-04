class InputValidator {
  validatePurchaseAmount(amount) {
    this.checkEmpty(amount);

    const amountValue = Number(amount);
    this.checkNaN(amountValue);
    this.checkDivisibility(amountValue);
  }

  validateWinningNumbers(numbers) {
    this.checkWinningNumbersLength(numbers);

    numbers.forEach(number => {
      this.checkNaN(number);
      this.checkRange(number);
    });

    this.checkUniqueNumbers(numbers);
  }

  validateBonusNumber(winningNumbers, bonusNumber) {
    this.checkEmpty(bonusNumber);
    this.checkSingleInput(bonusNumber);

    const bonusNumberValue = Number(bonusNumber);
    this.checkNaN(bonusNumberValue);
    this.checkRange(bonusNumberValue);
    this.checkBonusUnique(winningNumbers, bonusNumberValue);
  }

  checkEmpty(value) {
    if (value === '') {
      throw new Error(
        '[ERROR] 입력값이 비어있습니다. 유효한 값을 입력해야 합니다.'
      );
    }
  }

  checkNaN(value) {
    if (Number.isNaN(value)) {
      throw new Error('[ERROR] 숫자를 입력해야 합니다.');
    }
  }

  checkDivisibility(value) {
    if (value % 1000 !== 0) {
      throw new Error(
        '[ERROR] 구입 금액은 1,000원으로 나누어 떨어져야 합니다.'
      );
    }
  }

  checkWinningNumbersLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 당첨 번호는 반드시 6개여야 합니다.');
    }
  }

  checkRange(value) {
    if (value < 1 || value > 45) {
      throw new Error('[ERROR] 로또 번호는 1~45 사이여야 합니다.');
    }
  }

  checkUniqueNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error('[ERROR] 중복된 당첨 번호가 있습니다.');
    }
  }

  checkSingleInput(value) {
    if (value.split(',').length !== 1) {
      throw new Error('[ERROR] 보너스 번호는 반드시 1개여야 합니다.');
    }
  }

  checkBonusUnique(winningNumbers, bonusNumber) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
  }
}

export default InputValidator;
