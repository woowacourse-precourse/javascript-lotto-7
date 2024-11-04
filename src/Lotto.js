import { MissionUtils } from "@woowacourse/mission-utils";

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
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }

    numbers.forEach(num => {
      if (num < 1 || num > 45) {
          throw new Error("[ERROR] 로또 번호의 숫자 범위는 1이상 45이하여야 합니다.");
      }
    });

  }

  // 로또 번호 발행
  static generatedLottoNumbers() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    numbers.sort(function(a, b) {
      return a - b;
    });
    return new Lotto(numbers);
  }


  // 당첨번호 입력받은 숫자 유효검사
  static validWinningNumbers(winningNumbers) {
    if (!winningNumbers) {
        throw new Error("[ERROR] 로또 당첨 번호를 입력해주세요.");
    }
    if (winningNumbers.length !== 6) {
        throw new Error("[ERROR] 로또 당첨 번호는 6개여야 합니다.");
    }
    if (new Set(winningNumbers).size !== winningNumbers.length) {
        throw new Error("[ERROR] 로또 당첨 번호는 중복될 수 없습니다.");
    }
    
    winningNumbers.forEach((num) => {
        if (isNaN(num)) {
            throw new Error("[ERROR] 로또 당첨 번호는 숫자만 입력해주세요.");
        }
        if (num < 1 || num > 45) {
            throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
        }
    });
    return winningNumbers;
  }

  // 당첨 보너스번호 입력받은 숫자 유효검사
  static validBonusNumber(inputBonusNumbers, winningNumbers) {
    const bonusNumber = Number(inputBonusNumbers);
    if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
    return bonusNumber;
  }


  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;