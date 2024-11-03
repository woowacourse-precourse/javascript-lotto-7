class Validator {
  static checkAmount(amount) {
    if (isNaN(amount) || amount === '' || Number(amount) <= 0) {
      throw new Error('[ERROR] 금액 입력 오류!');
    }
    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 금액 단위 오류!');
    }
  }

  static checkLottoNumber(lottoNumber) {
    const lottoNumbers = lottoNumber.split(',').map(Number);
    if (lottoNumbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개 입니다.');
    }
    lottoNumbers.forEach((element) => {
      if (element < 1 || element > 45) {
        throw new Error('[ERROR] 로또 번호가 1~45사이의 값이 아닙니다.');
      }
    });
  }

  static checkBonusNumber(bonuseNumber, lottoNumber) {
    const lottoNumbers = lottoNumber.split(',').map(Number);

    if (isNaN(bonuseNumber) || bonuseNumber === '') {
      throw new Error('[ERROR] 보너스 번호가 숫자가 아닙니다.');
    }
    if (bonuseNumber < 1 || bonuseNumber > 45) {
      throw new Error('[ERROR] 보너스 번호가 1~45사이의 값이 아닙니다.');
    }
    if (lottoNumbers.includes(Number(bonuseNumber))) {
      throw new Error('[ERROR] 로또 번호와 보너스 번호가 중복 됩니다.');
    }
  }
}

export default Validator;
