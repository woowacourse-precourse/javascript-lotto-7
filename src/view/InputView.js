import { readUserInput } from "../utils/util.js";

class InputView {
  static async getLottoAmount() {
    return readUserInput("구매 금액을 입력해 주세요.\n");
  }

  static async getWinningNumbers() {
    return readUserInput("당첨 번호를 입력해 주세요.\n");
  }

  static async getBonusNumber() {
    return readUserInput("보너스 번호를 입력해 주세요.\n");
  }
}

export default InputView;
