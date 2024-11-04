import { Random } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b); // 오름차순 정렬
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    } else if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
  }

  //랜덤 로또 번호 반환과 동시에 인스턴스 생성
  static generateLottoNumbers() {
    return new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6));
  }

  // 로또번호 반환
  getNumbers() {
    return `[${this.#numbers.join(", ")}]`;
  }

  // 당첨 번호와 비교 후 맞는 갯수 리턴
  countMatchingNumbers(winningNumbersArray) {
    return this.#numbers.filter((num) => winningNumbersArray[num] === 1).length;
  }

  // 보너스 번호가 있는지 확인
  hasBonusNumber(winningNumbersArray) {
    return this.#numbers.some((num) => winningNumbersArray[num] === 2);
  }
}

export default Lotto;
