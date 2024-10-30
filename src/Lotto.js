import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b); // 오름차순 정렬
  }

  // 1~45 범위의 중복되지 않는 6개의 숫자를 생성
  static generate() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(numbers); // 새로 생성한 로또 번호로 Lotto 인스턴스 생성
  }

  // 유효성 검사: 1~45 범위의 6개의 숫자인지 확인
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1과 45 사이의 숫자여야 합니다.");
      }
    });
  }

  // 당첨 번호 유효성 검사
  static validateWinningNumbers(input) {
    const numbers = input.split(",").map(Number); // 쉼표로 구분하여 숫자로 변환
    if (numbers.length !== 6) {
      throw new Error(`[ERROR] 당첨 번호는 6개여야 합니다.`);
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 당첨 번호는 중복될 수 없습니다.");
    }
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 당첨 번호는 1과 45 사이의 숫자여야 합니다.");
      }
    });
    return numbers;
  }

  // 보너스 번호 유효성 검사
  static validateBonusNumber(input, winningNumbers) {
    const bonusNumber = Number(input);
    if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호는 1과 45 사이의 숫자여야 합니다.");
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
    return bonusNumber;
  }

  // 로또 번호를 문자열로 출력하는 메서드
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
