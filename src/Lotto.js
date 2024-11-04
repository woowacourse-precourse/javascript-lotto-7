class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      const ERROR_MESSAGE = `[ERROR] 로또 번호는 6개여야 합니다.`;
      throw new Error(ERROR_MESSAGE);
    }

    this.#properRange(numbers);
    this.#duplicate(numbers);
  }

  // TODO: 추가 기능 구현
  #properRange(numbers) {
    numbers.forEach(element => {
      if (element < 1 || element > 45 ) {
        const ERROR_MESSAGE = `[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.(Not Proper Range: ${element})`;
        throw new Error(ERROR_MESSAGE);
      }
    });
  }

  #duplicate(numbers) {
    const CHECK = new Set(numbers);

    if (numbers.length != CHECK.size) {
      const ERROR_MESSAGE = `[ERROR] 로또 번호는 서로 중복되지 않는 숫자여야 합니다.(Duplicate: ${numbers})`;
      throw new Error(ERROR_MESSAGE);
    }
  }
}

export default Lotto;