class ErrorHandler {
  static notDevideIntoThousand(number) {
    if (number % 1000 !== 0) {
      throw new Error('[ERROR] 1000원으로 나누어 떨어지지 않으면 에러처리');
    }
  }

  static validateLottoCount(lotteryNumber) {
    if (lotteryNumber.length !== 6) {
      throw new Error('[ERROR] 로또번호가 6개가 아니면 에러처리');
    }
  }

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

  static validateBonusNumberNotInLottoNumber(lottoNumbers, bonusNumber) {
    const bonusNum = Number(bonusNumber);
    if (lottoNumbers.includes(bonusNum)) {
      throw new Error('[ERROR] 보너스 번호가 로또 번호에 이미 있습니다.');
    }
  }
}

export default ErrorHandler;
