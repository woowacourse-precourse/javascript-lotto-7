class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#lottoSort(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (!this.#isOnlyUnique(numbers)) {
      throw new Error("[ERROR] 중복된 숫자가 존재하지 않아야 합니다.");
    }
  }

  #lottoSort(numbers) {
    numbers.sort((a, b) => a - b);
  }

  #isOnlyUnique(numbers) {
    const stack = [];

    for (let i = 0; i < numbers.length; i++) {
      if (stack.includes(numbers[i])) {
        return false;
      }
      stack.push(numbers[i]);
    }

    return true;
  }

}

export default Lotto;
