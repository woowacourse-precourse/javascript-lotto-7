import { Console } from '@woowacourse/mission-utils'; // Console 객체를 사용하여 입력 및 출력 처리
import { MESSAGES } from '../config/messages.js'; // 메시지 상수 사용
import { validateAmount, validateNumbers } from '../utils/validators.js'; // 입력값 검증 함수 사용

class InputView {
  // [] 구매 금액 입력 처리 (`Console.readLineAsync()` 사용)
  // - [] 1,000원 단위로 나누어 떨어지지 않는 경우 예외 처리
  static async getPurchaseAmount() {
    while (true) {
      try {
        const input = await Console.readLineAsync(`${MESSAGES.ENTER_AMOUNT}\n`); // 구매 금액 입력 처리
        const amount = parseInt(input, 10);
        validateAmount(amount); // 1,000원 단위로 나누어 떨어지지 않는 경우 예외 처리
        return amount;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  // [] 당첨 번호 입력 처리
  // - 중복되지 않는 숫자 6개 입력
  // - 범위: 1 ~ 45
  static async getWinningNumbers() {
    while (true) {
      try {
        const input = await Console.readLineAsync(`${MESSAGES.ENTER_WINNING_NUMBERS}\n`); // 당첨 번호 입력 처리
        const numbers = input.split(',').map(Number);
        validateNumbers(numbers); // 중복되지 않는 숫자 6개, 범위: 1 ~ 45 유효성 검사
        return numbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  // [] 보너스 번호 입력 처리
  // - 범위: 1 ~ 45
  // - 숫자 유효성 검사
  static async getBonusNumber() {
    while (true) {
      try {
        const input = await Console.readLineAsync(`${MESSAGES.ENTER_BONUS_NUMBER}\n`); // 보너스 번호 입력 처리
        const number = parseInt(input, 10);
        if (isNaN(number) || number < 1 || number > 45) { // 범위: 1 ~ 45, 숫자 유효성 검사
          throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.');
        }
        return number;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default InputView;
