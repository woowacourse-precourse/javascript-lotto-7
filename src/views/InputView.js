// @ts-nocheck

import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../utils/messages.js";
import {
  validateWinningNumbers,
  validateBonusNumber,
} from "../utils/validation.js";

class InputView {
  static async getPurchaseAmount() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(INPUT_MESSAGES.MONEY_INPUT, (input) => {
        const amount = Number(input);
        if (isNaN(amount)) {
          reject(new Error(ERROR_MESSAGES.NOT_A_NUMBER));
        } else if (amount % 1000 !== 0 || amount <= 0) {
          reject(new Error(ERROR_MESSAGES.MONEY_DEGREE));
        } else {
          resolve(amount / 1000); // 1000원당 한 장 구매 가능
        }
      });
    });
  }

  // 당첨 번호 입력받기
  static async getWinningNumbers() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(INPUT_MESSAGES.WINNING_NUMBER, (input) => {
        try {
          // 입력값을 쉼표로 구분하여 숫자 배열로 변환
          const numbers = input.split(",").map((num) => Number(num.trim()));
          validateWinningNumbers(numbers); // 유효성 검사
          resolve(numbers); // 검증된 당첨 번호 반환
        } catch (error) {
          reject(error); // 유효성 검사에서 오류 발생 시 reject
        }
      });
    });
  }

  // 보너스 번호 입력받기
  static async getBonusNumber(winningNumbers) {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(INPUT_MESSAGES.BONUS_NUMBER, (input) => {
        const bonusNumbers = input.split(",").map((num) => Number(num.trim()));

        try {
          const validatedBonusNumber = validateBonusNumber(
            bonusNumbers,
            winningNumbers
          ); // 유효성 검사
          resolve(validatedBonusNumber); // 검증 통과한 보너스 번호 반환
        } catch (error) {
          reject(error); // 유효성 검사에서 오류 발생 시 reject
        }
      });
    });
  }
}

export default InputView;
