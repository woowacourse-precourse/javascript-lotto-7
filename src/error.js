import { ERROR_MESSAGE } from "../src/message.js";


export function validateCost(cost) {
    if (isNaN(cost)) throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    if (!Number.isInteger(cost)) throw new Error(ERROR_MESSAGE.NOT_INTEGER);
    if (cost === 0) throw new Error(ERROR_MESSAGE.NUM_IS_ZERO);
    if (cost < 0) throw new Error(ERROR_MESSAGE.NEGATIVE_NUMBER);
    if (cost%1000 !== 0) {throw new Error(ERROR_MESSAGE.VALIDATE_DIVERSITY_BY_THOUSAND)};
};

export function validatePickedNumbers(pickedNumbers){
  const splitNumbers = pickedNumbers.split(',');

  if (/[^0-9,]/.test(pickedNumbers)) throw new Error(ERROR_MESSAGE.INVALID_SEPARATOR);
  if (splitNumbers.some(number => !Number.isInteger(Number(number))))
    throw new Error(ERROR_MESSAGE.NOT_INTEGER);
  if (splitNumbers.some(number => isNaN(number))) throw new Error(ERROR_MESSAGE.NOT_NUMBER);
  if (splitNumbers.length !== 6) throw new Error(ERROR_MESSAGE.NOT_SIX_NUMBERS);
  if (splitNumbers.some((number, index) => splitNumbers.indexOf(number) !== index))
    throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
  if (splitNumbers.some(number => Number(number) < 1 || Number(number) > 45)) throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);
}

export function validatePickedBonusNumbers(userPickedBonusNumber, pickedNumbers) {
  const bonusNumber = Number(userPickedBonusNumber);

  if (isNaN(bonusNumber)) throw new Error(ERROR_MESSAGE.NOT_NUMBER);
  if (!Number.isInteger(bonusNumber)) throw new Error(ERROR_MESSAGE.NOT_INTEGER);
  if (bonusNumber < 1 || bonusNumber > 45) throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);
  if (pickedNumbers.includes(bonusNumber)) throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
}

