class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
    }
    if (!numbers.every((num) => num >= 1 && num <= 45)) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }

  // 번호를 가져오는 메서드 추가
  getNumbers() {
    return this.#numbers;
  }

  // 두 로또 객체를 비교해 일치하는 번호 개수를 반환하는 메서드 추가
  getMatchCount(otherLotto) {
    return this.#numbers.filter((num) => otherLotto.getNumbers().includes(num)).length;
  }

  // 보너스 번호와의 일치 여부 확인 메서드 추가
  hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

export default Lotto;
