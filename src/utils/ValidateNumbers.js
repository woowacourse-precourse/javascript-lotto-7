class ValidateNumbers {
  constructor(numbers) {
    this.numbers = numbers;
  }

  isNumLengthSix() {
    if (this.numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  isNumValid() {
    for (const number of this.numbers) {
      const num = Number(number);
      if (isNaN(num)) {
        throw new Error("[ERROR] 로또 번호는 숫자로 입력해주세요.");
      }
      if (num < 1 || num > 45) {
        throw new Error("[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다.");
      }
      if (!Number.isInteger(num)) {
        throw new Error("[ERROR] 로또 번호는 1~45 사이의 정수여야 합니다.");
      }
    }
  }

  isUniqueNumber() {
    const uniqueNumbers = new Set(this.numbers);
    if (uniqueNumbers.size !== this.numbers.length) {
      throw new Error("[ERROR] 당첨 번호는 중복될 수 없습니다.");
    }
  }
}

export default ValidateNumbers;
