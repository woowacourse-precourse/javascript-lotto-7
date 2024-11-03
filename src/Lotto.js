import { Console } from "@woowacourse/mission-utils";

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

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error('[ERROR] 중복된 번호는 입력할 수 없습니다.');
    }
  }

  printNumbers() {
    Console.print('[' + this.#numbers.join(', ') + ']');
  }

  matchNumbers(targetNumbers) {
    let cnt = 0;
    this.#numbers.forEach((number) => {
      if (targetNumbers.includes(number)) {
        cnt += 1;
      }
    });
    return cnt;
  }
}

export default Lotto;
