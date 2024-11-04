class InputValidator {
  validatePurchaseAmount(amount) {
    this.checkEmpty(amount);

    const amountValue = Number(amount);
    this.checkNaN(amountValue);
    this.checkDivisibility(amountValue);
  }

  validateWinningNumbersInput(input) {
    if (input.trim() === '') {
      throw new Error('[ERROR] 당첨 번호를 입력해야 합니다.');
    }
  }

  validateWinningNumbers(numbers) {
    this.checkWinningNumbersLength(numbers);

    numbers.forEach(number => {
      this.checkIsNumber(number);
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
      throw new Error('[ERROR] 입력해야 합니다.');
    }
  }

  checkNaN(value) {
    if (Number.isNaN(value)) {
      throw new Error('[ERROR] 숫자여야 합니다.');
    }
  }

  checkDivisibility(value) {
    if (value % 1000 !== 0) {
      throw new Error('[ERROR] 1,000원으로 나누어 떨어져야 합니다.');
    }
  }

  checkWinningNumbersLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 반드시 6개여야 합니다.');
    }
  }

  checkIsNumber(value) {
    if (isNaN(value)) {
      throw new Error('[ERROR] 숫자여야 합니다.');
    }
  }

  checkRange(value) {
    if (value < 1 || value > 45) {
      throw new Error('[ERROR] 1~45 사이여야 합니다.');
    }
  }

  checkUniqueNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error('[ERROR] 중복된 번호가 있습니다.');
    }
  }

  checkSingleInput(value) {
    if (value.split(',').length !== 1) {
      throw new Error('[ERROR] 반드시 1개여야 합니다.');
    }
  }

  checkBonusUnique(winningNumbers, bonusNumber) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 중복될 수 없습니다.');
    }
  }
}

export default InputValidator;
