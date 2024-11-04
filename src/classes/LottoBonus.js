class LottoBonus {
  #bonusNumber;
  constructor(bonusNumber, winningNumber) {
    this.#bonusNumber = bonusNumber;
    this.winningNumber = winningNumber;
    this.#validate(bonusNumber);
  }

  #validateNumber(bonusNumber) {
    if (bonusNumber <= 0 || !Number.isInteger(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 양수여야 합니다.');
    }
  }

  #validateRange(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error('[ERROR] 보너스 번호는 1부터 45사이의 숫자여야 합니다.');
    }
  }

  #validateInclude(bonusNumber) {
    if (this.winningNumber.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호가 당첨 번호에 포함되어 있습니다.');
    }
  }

  #validate(bonusNumber) {
    this.#validateNumber(bonusNumber);
    this.#validateRange(bonusNumber);
    this.#validateInclude(bonusNumber);
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }
}

export default LottoBonus;
