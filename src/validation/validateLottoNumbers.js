import { Console } from '@woowacourse/mission-utils';
import { getWinningNumbers, getBonusNumber } from '../utils/getUserInput.js';

// export default async function validateLottotNumbers() {
//   const winningNumbers = await getValidateWinningNumbers();
//   const bonusNumber = await getValidateBonusNumber();

//   return { winningNumbers, bonusNumber };
// }

async function validateWinningNumbers(winningNumbers) {
  try {
    const parsedWinningNumbers = validateSixNumbers(winningNumbers);
    validateAllNumeric(parsedWinningNumbers);
    validateAllInRange(parsedWinningNumbers);
  } catch (error) {
    Console.print(error.message);
    const isValidInput = await getWinningNumbers();
    validateWinningNumbers(isValidInput);
  }
}

async function validateBonusNumber(winningNumberArray, bonusNumber) {
  try {
    validateIsNumeric(bonusNumber);
    validateInRange(bonusNumber);
    validateBonusNumberUniqueness(winningNumberArray, bonusNumber);
  } catch (error) {
    Console.print(error.message);
    const isValidInput = await getBonusNumber();
    validateBonusNumber(winningNumberArray, isValidInput);
  }
}

function validateSixNumbers(winningNumbers) {
  const validateWinningNumbers = winningNumbers
    .split(',')
    .map((num) => num.trim());
  if (validateWinningNumbers.length !== 6) {
    throw new Error('[ERROR] 입력할 로또 번호는 6개이며 ,(쉼표)로 구분합니다.');
  }

  return validateWinningNumbers;
}

function validateAllNumeric(winningNumbers) {
  winningNumbers.forEach((number) => {
    if (isNaN(number)) {
      throw new Error('[ERROR] 입력값은 숫자여야 합니다.');
    }
  });
}

function validateAllInRange(winningNumbers) {
  winningNumbers.forEach((number) => {
    if (number < 1 || number > 45) {
      throw new Error('[ERROR] 로또 번호는 1부터 45까지의 숫자입니다.');
    }
  });
}

function validateIsNumeric(bonusNumber) {
  if (Number.isNaN(Number(bonusNumber))) {
    throw new Error('[ERROR] 입력은 숫자와 구분자 ,만 허용됩니다.');
  }
}

function validateInRange(bonusNumber) {
  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error('[ERROR] 로또 번호는 1부터 45까지의 숫자입니다.');
  }
}

function validateBonusNumberUniqueness(winningNumbersArray, bonusNumber) {
  if (winningNumbersArray.includes(Number(bonusNumber))) {
    throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
  }
}

export { validateWinningNumbers, validateBonusNumber };
