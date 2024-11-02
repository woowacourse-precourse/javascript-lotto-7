export function purchaseAmountValidation(purchaseAmount) {
  if (!purchaseAmount.trim()) throw '구매금액은 1000단위의 숫자만 입력해주세요';
  if (!isNaN(purchaseAmount)) throw '구매금액은 1000단위의 숫자만 입력해주세요';
  if (Number(purchaseAmount) % 1000)
    throw '구매금액을 1000 단위로 입력해주세요';

  return Number(purchaseAmount) / 1000;
}

export function winningLottoValidation(winningLottoArray) {
  if (
    winningLottoArray.filter((lottoNum) => !lottoNumberValidation(lottoNum))
      .length > 0
  )
    throw '로또 번호는 1 ~ 45까지의 숫자만 가능합니다.';
  if (winningLottoArray.length !== 6) throw '당첨번호는 6자리로 입력해주세요';
  return testArr;
}
