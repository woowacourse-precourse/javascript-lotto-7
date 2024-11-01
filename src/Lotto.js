import { Console } from "@woowacourse/mission-utils";
import {
  PRINT_BONUS_NUMBER,
  PRINT_SPACER,
  PRINT_WINNING_RESULT,
} from "./constants/printConstant.js";
import Validator from "./Validator.js";

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
    Validator.validateBlank(number);
    Validator.validateNumber(number);
    Validator.validateRangeFrom1To45(number);
  }
  #validateNumbers(numbers) {
    Validator.validateLengthIsSix(numbers);
    Validator.validateUnique(numbers);
  }

  // TODO: 추가 기능 구현
  async inputBonusNumber() {
    try {
      const bonusNumber = String(
        await Console.readLineAsync(PRINT_BONUS_NUMBER)
      );
      this.#validateNumber(bonusNumber);
      Validator.validateDuplicateInArray(this.#numbers, Number(bonusNumber));
      this.#numbers = {
        basicNumbers: this.#numbers,
        bonusNumber: Number(bonusNumber),
      };
    } catch (error) {
      Console.print(error.message);
      return this.inputBonusNumber();
    }
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  compareLottoList(betLists) {
    Console.print(PRINT_WINNING_RESULT);
    Console.print(PRINT_SPACER);
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
