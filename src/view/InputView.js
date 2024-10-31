import readUserInput from "../utils/inputHandler.js";

export class InputView {
  static async getLottoAmount() {
    return readUserInput("구매 금액을 입력해 주세요.\n");
  }
}
