export function validateRangeOfLottoPrice(price) {
  if (price < 0) {
    throw new Error('[ERROR] 로또 가격은 0보다 작을 수 없습니다.');
  }
}

export function validateNumberTypeLottoPrice(price) {
  const lottoPrice = Number.parseInt(price, 10);
  if (lottoPrice % 1000 !== 0) {
    throw new Error('[ERROR] 로또 가격은 1000원 단위 숫자여야 합니다.');
  }
}

export function validateAmountOfLotto(amount) {
  if (Number.isNaN(amount)) {
    throw new Error('[ERROR] 로또 개수는 숫자여야 합니다.');
  }
  if (amount < 0) {
    throw new Error('[ERROR] 로또 개수는 0보다 작을 수 없습니다.');
  }
}
