import OutputHandler from "./OutputHandler.js";

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
  }

  // TODO: 추가 기능 구현

  // 로또 출력 함수
  displayNumbers() {
    OutputHandler.output("[" + this.#numbers.join(", ") + "]");
  }

  countMatchNumber(winningNumbers) {
    const matchNum = this.#numbers.filter((num) =>
      winningNumbers.includes(num)
    );
    return matchNum.length;
  }
}
export default Lotto;
