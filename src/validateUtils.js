const LOTTO_PURCHASE_UNIT = 1000;
const NUMBER_PATTERN = /^\d+$/;

export function checkPriceError(price) {
  if (!NUMBER_PATTERN.test(price)) {
    throw new Error('[ERROR] 구입 금액은 숫자로 입력해주세요.');
  }

  if (Number(price) % LOTTO_PURCHASE_UNIT !== 0) {
    throw new Error('[ERROR] 로또 구입 금액은 1000원 단위만 입력 가능합니다.');
  }
}
