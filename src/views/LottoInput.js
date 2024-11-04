import { Console } from "@woowacourse/mission-utils";
import { LOTTO_INPUT } from "../constants/Constants.js";
import LottoOutput from "./LottoOutput.js";
import ValidLotto from "../controllers/ValidLotto.js";

class LottoInput {
  constructor() {
    this.lottoOutput = new LottoOutput();
    this.validLotto = new ValidLotto();
  }

  async lottoPriceInput() {
    try {
      const lottoPrice = await Console.readLineAsync(
        LOTTO_INPUT.LOTTO_PRICE_INPUT
      );
      this.validLotto.validLottoPrice(lottoPrice);
      const lottoCnt = lottoPrice / 1000;
      this.lottoOutput.printLottoCnt(lottoCnt);
      return lottoPrice;
    } catch (error) {
      Console.print(error.message);
      return this.lottoPriceInput();
    }
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
