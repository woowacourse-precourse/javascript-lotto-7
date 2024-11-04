import { Console } from "@woowacourse/mission-utils";
import { LOTTO_INPUT_QUERY } from "./constants.js";

export const lottoInputView = {
  async readPrice() {
    const input = await Console.readLineAsync(LOTTO_INPUT_QUERY.PRICE);

    return input.trim();
  },
  async readWinningNumberList() {
    const input = await Console.readLineAsync(
      LOTTO_INPUT_QUERY.WINNING_NUMBER_LIST
    );

    return input.trim();
  },
  async readBonusNumber() {
    const input = await Console.readLineAsync(LOTTO_INPUT_QUERY.BONUS_NUMBER);

    return input.trim();
  },
};
