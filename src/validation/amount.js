import { Console } from '@woowacourse/mission-utils';
import { getPurchaseAmount } from '../utils/getUserInput.js';
import { GAME_SETTINGS, ERROR_MESSAGES, REGEX } from '../utils/constants.js';

export default async function validatePurchaseAmount(purchaseAmount) {
  try {
    isNumber(purchaseAmount);
    isPositiveNumber(purchaseAmount);
    isDivisibleByThousand(purchaseAmount);
    return purchaseAmount;
  } catch (error) {
    Console.print(error.message);

    const isValidInput = await getPurchaseAmount();
    return validatePurchaseAmount(isValidInput);
  }
}

function isNumber(purchaseAmount) {
  const isValidFormat = [
    REGEX.NO_COMMA_NUMBER_REGEX,
    REGEX.THOUSANDS_COMMA_REGEX,
  ].some((regex) => regex.test(purchaseAmount));
  if (!isValidFormat) {
    throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
  }
}

function cleanAmount(purchaseAmount) {
  return Number(
    purchaseAmount.replace(REGEX.COMMA_REGEX, GAME_SETTINGS.EMPTY_STRING)
  );
}

function isPositiveNumber(purchaseAmount) {
  if (cleanAmount(purchaseAmount) <= 0) {
    throw new Error(ERROR_MESSAGES.PURCHASE_AMOUNT_POSITIVE);
  }
}

// TODO: 정상작동하지만 가독성을 위해 분기처리해야할까? 조건문이 길다.
function isDivisibleByThousand(purchaseAmount) {
  if (cleanAmount(purchaseAmount) % GAME_SETTINGS.DIVISIBILITY_UNIT !== 0) {
    throw new Error(
      ERROR_MESSAGES.PURCHASE_AMOUNT_DIVISIBILITY(
        GAME_SETTINGS.DIVISIBILITY_UNIT
      )
    );
  }
}
