import { ERROR_MESSAGE } from "../src/message.js";
import { Console } from '@woowacourse/mission-utils';


export function validateCost(cost) {
    if (isNaN(cost)) throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    if (!Number.isInteger(cost)) throw new Error(ERROR_MESSAGE.NOT_INTEGER);
    if (cost === 0) throw new Error(ERROR_MESSAGE.NUM_IS_ZERO);
    if (cost < 0) throw new Error(ERROR_MESSAGE.NEGATIVE_NUMBER);
    if (cost%1000 !== 0) {throw new Error(ERROR_MESSAGE.VALIDATE_DIVERSITY_BY_THOUSAND)};
};

export function validatePickedNumbers(pickedNumbers) {

  if (Array.isArray(pickedNumbers)) {pickedNumbers = pickedNumbers.join(",");}
  const splitNumbers = pickedNumbers.split(",");
  const parsedNumbers = splitNumbers.map(number => Number(number.trim())); 
  if (/[^0-9,]/.test(pickedNumbers.replace(/\s/g, ""))) {throw new Error(ERROR_MESSAGE.INVALID_SEPARATOR);}
  if (splitNumbers.length !== 6) {throw new Error(ERROR_MESSAGE.NOT_SIX_NUMBERS);}
  if (parsedNumbers.some(number => isNaN(number))) {throw new Error(ERROR_MESSAGE.NOT_NUMBER);}
  if (parsedNumbers.some(number => !Number.isInteger(number))) {throw new Error(ERROR_MESSAGE.NOT_INTEGER);}
  if (new Set(parsedNumbers).size !== 6) {throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);}
  if (parsedNumbers.some(number => number < 1 || number > 45)) {throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);}
}

export function validatePickedBonusNumbers(userPickedBonusNumber, pickedNumbers) {
  const bonusNumber = Number(userPickedBonusNumber);

  if (isNaN(bonusNumber)) throw new Error(ERROR_MESSAGE.NOT_NUMBER);
  if (!Number.isInteger(bonusNumber)) throw new Error(ERROR_MESSAGE.NOT_INTEGER);
  if (bonusNumber < 1 || bonusNumber > 45) throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);
  if (pickedNumbers.includes(bonusNumber)) throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
}

