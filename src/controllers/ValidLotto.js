class ValidLotto {
  validLottoPrice(lottoPrice) {
    const validPrice = Number(lottoPrice);
    if (isNaN(validPrice)) {
      throw new Error(
        "[ERROR] 로또 구입 금액은 1,000원 단위의 숫자여야 합니다."
      );
    }
  }
}

export default ValidLotto;
