function validateIsNumber(number) {
  if (typeof number !== 'number' || Number.isNaN(number)) {
    throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
  }
}

function validateIsInteger(number) {
  if (!Number.isInteger(number)) {
    throw new Error('[ERROR] 로또 번호는 정수여야 합니다.');
  }
}

function validateLength(numbers) {
  if (numbers.length !== 6) {
    throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  }
}

function validateNoDuplicates(numbers) {
  if (new Set(numbers).size !== 6) {
    throw new Error('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
  }
}

function validateRange(number) {
  if (number < 1 || number > 45) {
    throw new Error('[ERROR] 로또 번호는 1과 45 사이여야 합니다.');
  }
}

function validateBonusNumberInWinningNumbers(bonusNumber, winningNumbers) {
  if (winningNumbers.includes(bonusNumber)) {
    throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복되면 안됩니다.');
  }
}

export function validateLottoNumbers(numbers) {
  numbers.forEach(number => {
    validateIsNumber(number);
    validateIsInteger(number);
    validateRange(number);
  });
  validateLength(numbers);
  validateNoDuplicates(numbers);
}

export function validateBonusNumber(bonusNumber, winningNumbers) {
  validateIsNumber(bonusNumber);
  validateIsInteger(bonusNumber);
  validateRange(bonusNumber);
  validateBonusNumberInWinningNumbers(bonusNumber, winningNumbers);
}
