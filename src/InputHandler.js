import { Console } from "@woowacourse/mission-utils";

// 사용자 입력을 처리하는 클래스
class InputHandler {
  // 구입 금액 입력 받기
  async getPurchaseMoney() {
    return await Console.readLineAsync("구입금액을 입력해 주세요.\n");
  }

  // 당첨 번호 입력 받기
  async getWinningNumber() {
    return await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
  }

  // 보너스 번호 입력 받기
  async getBonusNumber() {
    return await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
  }
}

export default InputHandler;
