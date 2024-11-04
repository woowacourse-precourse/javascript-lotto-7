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
      this.validateBonusNumber(bonusNumber);
      this.#saveBonusNumber(bonusNumber);
    } catch (error) {
      Console.print(error.message);
      return this.inputBonusNumber();
    }
  }

  validateBonusNumber(bonusNumber) {
    this.#validateNumber(bonusNumber);
    Validator.validateDuplicateInArray(this.#numbers, Number(bonusNumber));
  }

  #saveBonusNumber(bonusNumber) {
    this.#numbers = {
      basicNumbers: this.#numbers,
      bonusNumber: Number(bonusNumber),
    };
  }

  getLottosScore(betLists) {
    this.#printScoreTitle();
    const results = [];
    for (const betList of betLists) {
      this.#compareLottoWithBetList(betList, results);
    }
    return results;
  }

  #printScoreTitle() {
    Console.print(PRINT_WINNING_RESULT);
    Console.print(PRINT_SPACER);
  }

  #compareLottoWithBetList(betList, results) {
    results.push({
      score: this.#getScoreLength(betList),
      isBonus: this.#getBonus(betList),
    });
  }

  #getScoreLength(betList) {
    return betList.filter((number) =>
      this.#numbers.basicNumbers.includes(number)
    ).length;
  }

  #getBonus(betList) {
    return betList.includes(this.#numbers.bonusNumber);
  }
}

export default Lotto;
