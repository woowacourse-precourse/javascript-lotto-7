class Lotto {
  #numbers;

  constructor(numbers) {
    if (
      this.#validate(numbers) &
      this.#areNumbers(numbers) &
      this.#between1And46(numbers) &
      this.#noRepeats(numbers)
    )
      this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // 입력한 것들이 숫자인지 확인한다
  #areNumbers(numbers) {
    for (let number of numbers) {
      if (!!isNaN(number)) {
        throw new Error("[ERROR] 로또 번호는 숫자이어야 합니다.");
      }
    }
    return true;
  }

  // 입력한 숫자들이 1에서 45까지인지 확인한다
  #between1And46(numbers) {
    // 입력한 것들이 숫자인지 확인한다
    for (let number of numbers) {
      if ((number < 1) | (number > 45)) {
        throw new Error("[ERROR] 로또 번호는 1에서 45까지 숫자이어야 합니다.");
      }
    }
    return true;
  }

  //입력한 숫자들이 중복된 것이 있는지 확인한다
  #noRepeats(numbers) {
    var CHECK_REPEAT = new Set();
    for (let number of numbers) CHECK_REPEAT.add(number);
    if (CHECK_REPEAT.size != numbers.length) {
      console;
      throw new Error("[ERROR] 로또 번호는 중복이 없습니다.");
    }
    return true;
  }
}

export default Lotto;
