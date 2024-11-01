import { Console } from '@woowacourse/mission-utils';
import { getPurchaseAmount } from '../utils/getUserInput.js';

const NO_COMMA_NUMBER_REGEX = /^\d+$/;
const THOUSANDS_COMMA_REGEX = /^\d{1,3}(,\d{3})*$/;
const DIVISIBILITY_UNIT = 1000;

export default async function validatePurchaseAmount(purchaseAmount) {
  try {
    isNumber(purchaseAmount);
    isDivisibleByThousand(purchaseAmount);
  } catch (error) {
    Console.print(error.message);
    const isValidInput = await getPurchaseAmount();
    validatePurchaseAmount(isValidInput);
  }
}

function isNumber(purchaseAmount) {
  const isValidFormat = [NO_COMMA_NUMBER_REGEX, THOUSANDS_COMMA_REGEX].some(
    (regex) => regex.test(purchaseAmount)
  );
  if (!isValidFormat) {
    throw new Error('[ERROR] 구입 금액을 숫자로 넣어주세요.');
  }
}

// TODO: 정상작동하지만 가독성을 위해 분기처리해야할까?
function isDivisibleByThousand(purchaseAmount) {
  const cleanAmount = purchaseAmount.replace(/,/g, '');
  if (Number(cleanAmount) % DIVISIBILITY_UNIT !== 0) {
    throw new Error(
      `[ERROR] 구입 금액은 ${DIVISIBILITY_UNIT} 단위로 나누어 떨어져야합니다.`
    );
  }
}
