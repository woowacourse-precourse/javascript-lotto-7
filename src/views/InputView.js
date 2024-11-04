// @ts-nocheck
import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../utils/messages.js";
import {
  validatePurchaseAmount,
  validateWinningNumbers,
  validateBonusNumber,
} from "../utils/validation.js";

const InputView = {
  async getPurchaseAmount() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.MONEY_INPUT);
    const amount = Number(input);
    validatePurchaseAmount(amount); // 유효성 검사
    return amount; // 검증된 금액 반환
  },

  async getWinningNumbers() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.WINNING_NUMBER);
    const numbers = input.split(",").map((num) => Number(num.trim()));
    validateWinningNumbers(numbers); // 유효성 검사
    return numbers; // 검증된 당첨 번호 반환
  },

  async getBonusNumber(winningNumbers) {
    const input = await Console.readLineAsync(INPUT_MESSAGES.BONUS_NUMBER);
    const bonusNumbers = input.split(",").map((num) => Number(num.trim()));
    validateBonusNumber(bonusNumbers, winningNumbers); // 유효성 검사
    return bonusNumbers[0]; // 검증 통과한 보너스 번호 반환
  },
};

export default InputView;
