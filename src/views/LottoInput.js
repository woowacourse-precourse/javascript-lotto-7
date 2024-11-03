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
    let lottoWinStr = await Console.readLineAsync(LOTTO_INPUT.LOTTO_WIN_INPUT);
    const lottoWinArr = lottoWinStr.split(",").map(Number);
    const lottoBonusNum = await this.lottoBonusInput();
    return [lottoWinArr, lottoBonusNum];
  }

  async lottoBonusInput() {
    const lottoBonusNum = await Console.readLineAsync(
      LOTTO_INPUT.LOTTO_BONUS_INPUT
    );
    return lottoBonusNum;
  }
}

export default LottoInput;
