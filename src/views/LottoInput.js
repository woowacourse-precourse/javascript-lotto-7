import { Console } from "@woowacourse/mission-utils";
import { LOTTO_INPUT } from "../constants/Constants.js";

class LottoInput {
  async lottoPriceInput() {
    const lottoPrice = await Console.readLineAsync(
      LOTTO_INPUT.LOTTO_PRICE_INPUT
    );

    return lottoPrice;
  }
}

export default LottoInput;
