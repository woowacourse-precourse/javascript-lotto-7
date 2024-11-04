import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constant/messages.js";

const inputView = {
  async readLottoAmount() {
    return Console.readLineAsync(MESSAGES.input.lotto_amount);
  },
  async readWinningLottoNumbers() {
    return Console.readLineAsync(MESSAGES.input.winning_numbers);
  },
  async readBonusNumbers() {
    return Console.readLineAsync(MESSAGES.input.bonus_number);
  },
};

export default inputView;
