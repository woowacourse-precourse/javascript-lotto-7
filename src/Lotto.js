class Lotto {
  #numbers;
  #bonus;
  #money;
  #userLotto;

  constructor(numbers, bonus, money, userLotto) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#bonus = bonus;
    this.#money = money;
    this.#userLotto = userLotto;
  }

  #validate(numbers) {
    const uniqueArray = new Set(numbers);
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    for (let num of numbers) {
      if (num < 0 || num > 45) {
        throw new Error("[ERROR] 당첨번호는 1부터 45까지 사이의 수여야 합니다.");
      }
      if (isNaN(num)) {
        throw new Error("[ERROR] 숫자를 입력해야 합니다.");
      }
    }
    if (uniqueArray.size !== numbers.length) {
      throw new Error("[ERROR] 당첨번호는 중복되지 않는 6개 숫자여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
