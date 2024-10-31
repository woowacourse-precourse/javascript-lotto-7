import { getPurchaseAmount } from '../utils/getUserInput';
import { Console } from '@woowacourse/mission-utils';

const NO_COMMA_NUMBER_REGEX = /^\d+$/;
const THOUSANDS_COMMA_REGEX = /^\d{1,3}(,\d{3})*$/;
const DIVISIBILITY_UNIT = 1000;

export default async function validatePurchaseAmount() {
  try {
    const purchaseAmount = await getPurchaseAmount();
    isNumber(purchaseAmount);
    isDivisibleByThousand(purchaseAmount);
  } catch (error) {
    Console.print(error.message);
    await validatePurchaseAmount();
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

function isDivisibleByThousand(purchaseAmount) {
  if (Number(purchaseAmount) % DIVISIBILITY_UNIT !== 0) {
    throw new Error(
      `[ERROR] 구입 금액은 ${DIVISIBILITY_UNIT} 단위로 나누어 떨어져야합니다.`
    );
  }
}
