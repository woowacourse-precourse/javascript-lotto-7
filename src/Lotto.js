import { Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#duplicate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #duplicate(numbers) {
    //중복 확인
    let numberSet = new Set(numbers);
    if (numberSet.size < 6) {
      throw new Error("[ERROR] 중복된 숫자가 존재합니다.");
    }
  }

  printLotto() {
    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  haveNumber(number) {
    if (this.#numbers.includes(number)) {
      throw new Error("[ERROR] 중복된 숫자가 존재합니다.");
    }
  }

  getNumber() {
    return this.#numbers;
  }

  winningCheck(winNumber, bonusNumber) {
    let winCount = 0;
    let bonusCheck = false;
    for (let number of this.#numbers) {
      if (winNumber.includes(number)) {
        winCount++;
      }
    }
    if (winNumber.includes(bonusNumber)) {
      bonusCheck = true;
    }
    return this.winningPrice(winCount, bonusCheck);
  }

  winningPrice(winCount, bonusCheck) {
    if (winCount < 3) return 0;
    if (winCount === 3) return 5000;
    if (winCount === 4) return 50000;
    if (winCount === 5 && bonusCheck) return 30000000;
    if (winCount === 5) return 1500000;
    if (winCount === 6) return 2000000000;
  }
}

export default Lotto;
