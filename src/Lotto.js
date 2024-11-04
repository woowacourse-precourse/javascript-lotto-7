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
    else if (new Set(numbers).size != numbers.length){
      throw new Error("[ERROR] 로또 번호는 서로 중복돼선 안됩니다.");
    }
    else if (numbers.some(number => number > 45 || number < 1)){
      throw new Error("ERROR] 로또 번호는 1에서 45 사이의 값만 가능합니다.");
    }

  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
