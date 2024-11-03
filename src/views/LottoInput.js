import { Console } from "@woowacourse/mission-utils";
import { LOTTO_INPUT } from "../constants/Constants.js";

class LottoInput {
  async lottoPriceInput() {
    const lottoPrice = await Console.readLineAsync(
      LOTTO_INPUT.LOTTO_PRICE_INPUT
    );
    return lottoPrice;
  }

  async lottoWinInput() {
    const lottoWinStr = await Console.readLineAsync(
      LOTTO_INPUT.LOTTO_WIN_INPUT
    );
    const lottoWinArr = lottoWinStr.split(",").map(Number);
    return lottoWinArr;
  }
}

export default LottoInput;
