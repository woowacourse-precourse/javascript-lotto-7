class Lotto {
  constructor(numbers) {
    this.validate(numbers);
    this.numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 하며 중복될 수 없습니다.");
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있으면 예외가 발생한다.");
    }

    numbers.forEach(number => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 한다.");
      }
    });
  }

  getNumbers() {
    return this.numbers;
  }
}

export default Lotto;
