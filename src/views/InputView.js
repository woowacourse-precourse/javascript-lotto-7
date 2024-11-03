import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../utils/messages.js";
import { validateWinningNumbers } from "../utils/validation.js";

class InputView {
  static async getWinningNumbers() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(INPUT_MESSAGES.WINNING_NUMBER, (input) => {
        try {
          // 입력값을 쉼표로 구분하여 배열로 변환
          const numbers = input.split(",").map((num) => Number(num.trim()));
          validateWinningNumbers(numbers); // 유효성 검사
          resolve(numbers);
        } catch (error) {
          reject(error); // 오류 발생 시 메시지 출력
        }
      });
    });
  }
}

export default InputView;
