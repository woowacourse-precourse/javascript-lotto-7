class Validator {
  static cashValidation(string) {
    if (!/^\d+$/.test(string)) {
      throw new Error('[ERROR] 숫자 형식이 아닙니다.');
    }

    const number = Number(string);

    // 양수 체크
    if (number <= 0) {
      throw new Error('[ERROR] 양수를 입력해주세요.');
    }

    // 1000원 단위 체크
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

  static bonusNumberValidation(string, targetLotto) {
    if (!/^\d+$/.test(string)) {
      throw new Error('[ERROR] 숫자 형식이 아닙니다.');
    }
    const number = Number(string);

    if (number <= 0) {
      throw new Error('[ERROR] 양수를 입력해주세요.');
    }
    if (number < 1 && number > 45) {
      throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다');
    }

    if (targetLotto.includes(number)) {
      throw new Error('[ERROR] 보너스 번호는 당첨번호와 중복될 수 없습니다.');
    }
  }
}

export default Validator;
