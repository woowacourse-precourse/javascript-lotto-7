import { getWinningNumbers, getBonusNumber } from '../utils/getUserInput.js';
import { Console } from '@woowacourse/mission-utils';

export default async function validateLottotNumbers() {
  await getValidateWinningNumbers();
  await getValidateBonusNumber();
}

async function getValidateWinningNumbers() {
  try {
    const winningNumbers = await getWinningNumbers();
    const parsedWinningNumbers = validateSixNumbers(winningNumbers);
    validateAllNumeric(parsedWinningNumbers);
    validateAllInRange(parsedWinningNumbers);
  } catch (error) {
    Console.print(error.message);
    await getValidateWinningNumbers();
  }
}

async function getValidateBonusNumber() {
  try {
    const bonusNumber = await getBonusNumber();
    validateIsNumeric(bonusNumber);
    validateInRange(bonusNumber);
  } catch (error) {
    Console.print(error.message);
    await getValidateBonusNumber();
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
