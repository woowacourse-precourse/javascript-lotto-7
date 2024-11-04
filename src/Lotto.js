import { Random } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    if (numbers) {
      // 주어진 숫자 배열로 로또 생성 시 예외 처리
      this.validateNumbers(numbers);
      this.#numbers = numbers.sort(
        (a, b) => a - b
      );
    } else {
      // 무작위 숫자 생성
      this.#numbers =
        Random.pickUniqueNumbersInRange(
          1,
          45,
          6
        ).sort((a, b) => a - b);
    }
  }

  validateNumbers(numbers) {
    // 6개의 숫자가 아닌 경우
    if (numbers.length !== 6) {
      throw new Error("[ERROR]");
    }

    // 중복된 숫자가 있는 경우
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR]");
    }

    // 숫자가 1에서 45 범위를 벗어나는 경우
    numbers.forEach((num) => {
      if (num < 1 || num > 45) {
        throw new Error("[ERROR]");
      }
    });
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
