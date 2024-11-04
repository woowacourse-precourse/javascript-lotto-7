import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers = null) {
    this.#numbers = numbers || this.#generateNumbers(); // numbers가 없으면 자동 생성
    this.#validate(this.#numbers); // 유효성 검사
  }

  // 1부터 45까지의 숫자 중 중복 없는 6개를 랜덤으로 생성
  #generateNumbers() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers.sort((a, b) => a - b); // 오름차순 정렬
  }

  // 6개의 중복 없는 숫자로 구성되는지 검사
  #validate(numbers) {
    if (numbers.length !== 6 || new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않는 숫자 6개여야 합니다.");
    }
  }

  // 외부 접근
  getNumbers() {
    return this.#numbers;
  }

  // 당첨 번호와 일치하는 개수를 반환
  getMatchCount(winningNumbers) {
    return this.#numbers.filter((num) => winningNumbers.includes(num)).length;
  }

  // 보너스 번호가 numbers에 포함되는지 여부 확인
  hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

export default Lotto;
