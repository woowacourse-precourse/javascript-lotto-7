class LottoWinner {
  #numbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#validateParseNumbers(numbers);
    this.#validateParseBonusNumber(bonusNumber);
    this.#validateHasSameNumber(numbers, bonusNumber);
    this.#numbers = numbers;
    this.#bonusNumber = bonusNumber;
  }

  #validateParseNumbers(input) {
    this.#validateNumberIsSix(input);
    input.forEach((number) => this.#validateNumberRange(number));
    input.forEach((number) => this.#validateIsNaN(number));
    input.forEach((number) => {
      const checkDuplicate = input.filter((el) => (el === number));
      this.#validateIsDuplicate(checkDuplicate);
    });
  }

  #validateParseBonusNumber(parseBonusNumber) {
    this.#validateNumberRange(parseBonusNumber);
    this.#validateIsNaN(parseBonusNumber);
  }

  #validateHasSameNumber(number, bonus) {
    number.forEach((input) => this.#validateBonus(input, bonus));
  }

  #validateNumberIsSix(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #validateIsDuplicate(input) {
    if (input.length > 1) {
      throw new Error('[ERROR] 중복 숫자는 사용할 수 없습니다.')
    }
  }

  #validateNumberRange(number) {
    if (number <= 0 || number >= 46) {
      throw new Error('[ERROR] 1~45 사이의 숫자만 입력해야 합니다.')
    }
  }

  #validateIsNaN(number) {
    if (Number.isNaN(number)) {
      throw new Error('[ERROR] 숫자만 입력할 수 있습니다.')
    }
  }

  #validateBonus(input, bonus) {
    if (input === bonus) {
      throw new Error('[ERROR] 당첨 번호와 보너스 번호는 중복될 수 없습니다.')
    }
  }

  // TODO 추가 구현
}

export default LottoWinner;
