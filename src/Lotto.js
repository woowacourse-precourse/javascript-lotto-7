import { Console } from "@woowacourse/mission-utils";

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
  printNumbers() {
    Console.print("[" + this.#numbers.join(', ') + "]");
  }

  matchNumbers(winningNumbers) {
    let cnt = 0;
    this.#numbers.forEach((num) => {
      if(winningNumbers.includes(num)){
        cnt += 1;
    }});
    return cnt;
  }

  matchBonusNumber(bonusNumber){
    let cnt = 0;
    this.#numbers.forEach((num) => {
      if(bonusNumber == (num)){
        cnt += 1;
    }});
    return cnt;
  }
}

export default Lotto;