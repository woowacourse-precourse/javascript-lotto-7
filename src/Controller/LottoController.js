import { Console } from "@woowacourse/mission-utils";
import InputView from "../View/InputView.js";
import LottoCheck from "./LottoCheck.js";
import LottoData from "../Model/LottoData.js";
import OutputView from "../View/OutputView.js";

class LottoController {
  constructor() {
    this.inputview = new InputView();
    this.outputview = new OutputView();
  }
  async play() {
    const amount = await this.inputview.AmountInput();
    Console.print("");
    this.outputview.AmountPrint(amount);
    const lottoData = new LottoData(amount);
    this.outputview.LottoPrint(lottoData.getLotto());
    const winners = await this.inputview.WinnerInput();
    const bonus = await this.inputview.BonusInput(winners);
    const check = new LottoCheck(lottoData.getLotto(), winners, bonus);
    this.outputview.ResultPrint(check.CheckResult());
    this.outputview.PercentPrint(amount, check.Sum());
  }
}
export default LottoController;
