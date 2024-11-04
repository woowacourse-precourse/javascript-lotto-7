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

    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호에는 중복된 숫자가 없어야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  sortNumber() {
    this.#numbers.sort((a, b) => a - b); // 오름차순 정렬
  }

  showNumber() {
    Console.print(`[${this.#numbers.join(", ")}]`); // 양 끝의 공백을 제거하여 출력
  }

  checkWinStatus(winningNumbers, bonusNumber) {
    if (winningNumbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }
    let matches = 0;

    // 당첨 번호와 보너스 번호를 원소로 가지는지 확인, 당첨 번호 개수와 보너스 번호 일치 여부를 저장
    for (let i = 0; i < winningNumbers.length; i++) {
      if (this.#numbers.includes(winningNumbers[i])) {
        matches++;
      }
    }
    if (matches === 5 && this.#numbers.includes(bonusNumber)) {
      return 7;
    }
    return matches;
  }
}

export default Lotto;
