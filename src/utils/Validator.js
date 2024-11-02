class Validator {
  static cashValidation(string) {
    if (!/^-?\d*\.?\d+$/.test(string)) {
      throw new Error('[ERROR] 숫자 형식이 아닙니다.');
    }

    const number = Number(string);

    if (number < 0) {
      throw new Error('[ERROR] 양수를 입력해주세요.');
    }
    if (!Number.isInteger(number)) {
      throw new Error('[ERROR] 정수만 입력 가능합니다.');
    }

    if (number % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위로 입력해주세요.');
    }
  }

  static printedLottoValidation(lotto) {
    if (lotto.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (new Set(lotto).size !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }
    if (!lotto.every(num => num >= 1 && num <= 45)) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }

  static targetLottoValidation(string) {
    if (!string.includes(',')) {
      throw new Error('[ERROR] 쉼표(,)로 구분된 숫자를 입력해 주세요.');
    }
    const lotto = string.split(',');
    if (lotto.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (new Set(lotto).size !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }
    if (!lotto.every(num => num >= 1 && num <= 45)) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }
}

export default Validator;
