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

    if (numbers.length !== new Set(numbers).size) {
      throw new Error('[ERROR] 로또 번호는 중복하여 입력할 수 없습니다.');
    }

    numbers.forEach((num) => {
      if (num < 1 || num > 45) {
        throw new Error('[ERROR] 로또 번호 숫자 범위는 1~45입니다.');
      }

      if (isNaN(num)) {
        throw new Error('[ERROR] 로또 번호는 숫자만 입력 가능합니다.');
      }

      if (num % 1 !== 0) {
        throw new Error('[ERROR] 로또 번호는 정수만 입력 가능합니다.');
      }
    });
  }
}

export default Lotto;
