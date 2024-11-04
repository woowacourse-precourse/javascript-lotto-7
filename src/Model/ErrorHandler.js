class ErrorHandler {
  static validateUniqueLottoNumbers(lotteryNumber) {
    const lottoSet = new Set(lotteryNumber);
    if (lottoSet.size !== 6) {
      throw new Error(
        '[ERROR] 로또 번호에 중복된 숫자가 있으면 예외가 발생한다.',
      );
    }
  }

  static validateNumericInput(purchaseAmount) {
    if (Number.isNaN(Number(purchaseAmount))) {
      throw new Error('[ERROR] 입력받은 값이 숫자가 아닙니다.');
    }
  }

  static validateLottoNumber(lottoNumbers) {
    const numbersArray = lottoNumbers.split(',').map(Number);
    numbersArray.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
      }
    });
  }
}

export default ErrorHandler;
