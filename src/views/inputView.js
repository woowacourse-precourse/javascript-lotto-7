import { Console, Random } from "@woowacourse/mission-utils";

const InputView = {
  async readPurchaseAmount() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");

    return input;
  },

  async readWinningNumber() {
    const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");

    return this.parseWinningNumber(input);
  },

  parseWinningNumber(input) {
    return input.split(",").map((number) => number.trim());
  },

  async readBonusNumber() {
    const input = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");

    return input;
  },
};

export default InputView;
