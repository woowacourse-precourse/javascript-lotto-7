import { Console } from "@woowacourse/mission-utils";
import validator from "./validator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    validator.lottoNumberArray(numbers);
    for (const number of numbers) {
      validator.lottoNumber(number);
    }
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  printNumberArray() {
    // 배열을 직접 출력하면 테스트 통과 X -> 배열 형식의 문자열로 만들어주어야 함.
    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  getLevel(winningNumbers, bonusNumber) {
    const matchCount = this.#numbers.filter((number) =>
      winningNumbers.includes(number)
    ).length;

    if (matchCount === 6) return 1;
    if (matchCount === 5) {
      if (this.#numbers.includes(bonusNumber)) return 2;
      return 3;
    }
    if (matchCount === 4) return 4;
    if (matchCount === 3) return 5;
    return 0;
  }
}

export default Lotto;
