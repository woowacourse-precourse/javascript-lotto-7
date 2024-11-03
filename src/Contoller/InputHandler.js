import Validation from './Validation.js';

class InputHandler {
  getValidatedPurchseAmount(amount) {
    Validation.validateNotEmpty(amount);
    const purchseAmount = parseFloat(amount);
    Validation.validateIsNumber(purchseAmount);
    Validation.validateThousandUnit(purchseAmount);
    return purchseAmount;
  }

  getValidatedWinningNumbers(numbers) {
    Validation.validateCommaSeparatedFormat(numbers);
    const winningNumbers = numbers.split(',').map(Number);
    Validation.validateSixNumbers(winningNumbers);
    winningNumbers.forEach((number) => {
      Validation.validateIsNumber(number);
      Validation.validatePositiveInteger(number);
      Validation.validateNumberInRange(number);
    });
    Validation.validateUniqueNumbers(winningNumbers);
    return winningNumbers;
  }

  getValidatedBonusNumbers(number, winningNumbers) {
    const bonusNumber = Number(number);
    Validation.validateIsNumber(bonusNumber);
    Validation.validatePositiveInteger(bonusNumber);
    Validation.validateNumberInRange(bonusNumber);
    Validation.validateUniqueBonusNumber(winningNumbers, bonusNumber);
    return bonusNumber;
  }
}

export default InputHandler;
