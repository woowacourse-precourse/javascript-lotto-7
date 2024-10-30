class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    numbers.forEach((number) => {
      if (Number(number) < 1 || Number(number) > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    });
    if (this.isDupulicate(numbers)) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
  }

  isDupulicate(numbers) {
    return numbers.some(
      (number) => numbers.indexOf(number) !== numbers.lastIndexOf(number)
    );
  }
}

export default Lotto;
