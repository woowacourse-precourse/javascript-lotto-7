import { Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(input) {
    this.#validate(input);
    this.#numbers = input;
  }

  #validate(numbers) {
    numbers.forEach((number) => {
      this.#validateNumber(number);
    });
    this.#validateNumbers(numbers);
  }
  
  #validateNumber(number) {
    if (number === "") {
      throw new Error("[ERROR] 공백은 입력될 수 없습니다.");
    }
    if (isNaN(number)) {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
    if (number > 45 || number < 1) {
      throw new Error("[ERROR] 1이상 45이하의 숫자를 입력해주세요.");
    }
  }
  #validateNumbers(numbers) {
    this.#validateIsSix(numbers);
    this.#validateIsUnique(numbers);
  }
  #validateIsSix(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
  #validateIsUnique(numbers) {
    if (numbers.length !== new Set(numbers).size) {
      throw new Error("[ERROR] 중복되는 번호는 입력될 수 없습니다.");
    }
  }
  // TODO: 추가 기능 구현
  async inputBonusNumber() {
    const bonusNumber = String(
      await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n")
    );
    this.#validateNumber(bonusNumber);
    if (this.#numbers.includes(Number(bonusNumber))) {
      throw new Error("[ERROR] 중복되는 번호는 입력될 수 없습니다.");
    }
    this.#numbers = { basicNumbers: this.#numbers, bonusNumber: Number(bonusNumber) };
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  compareLottoList(betLists) {
    Console.print("\n당첨 통계");
    Console.print("---");
    const results = [];
    for (const betList of betLists) {
      const matchNumber = betList.filter((number) =>
        this.#numbers.basicNumbers.includes(number)
      );
      const isBonus = betList.includes(this.#numbers.bonusNumber);
      results.push({
        score: matchNumber.length,
        isBonus: isBonus,
      });
    }
    let matchList = { "1등": 0, "2등": 0, "3등": 0, "4등": 0, "5등": 0 };
    let reward = 0;
    for (const result of results) {
      if (result.score === 3) {
        matchList["5등"] += 1;
        reward += 5000;
      }
      if (result.score === 4) {
        matchList["4등"] += 1;
        reward += 50000;
      }
      if (result.score === 5 && !result.isBonus) {
        matchList["3등"] += 1;
        reward += 1500000;
      }
      if (result.score === 5 && result.isBonus) {
        matchList["2등"] += 1;
        reward += 30000000;
      }
      if (result.score === 6) {
        matchList["1등"] += 1;
        reward += 2000000000;
      }
    }
    Console.print(`3개 일치 (5,000원) - ${matchList["5등"]}개`);
    Console.print(`4개 일치 (50,000원) - ${matchList["4등"]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${matchList["3등"]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchList["2등"]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${matchList["1등"]}개`);
    return reward;
  }
}

export default Lotto;
