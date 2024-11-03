import LottoStore from "../models/LottoStore.js";
import WinningNumbers from "../models/WinningNumbers.js";
import ResultCalculator from "../models/ResultCalculator.js";
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";
import Validator from "../utils/Validator.js";

class LottoController {
  #lottoStore;
  #inputView;
  #outputView;

  constructor() {
    this.#lottoStore = new LottoStore();
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async run() {
    try {
      // 1. 구입 금액 입력받기 및 유효성 검사
      const money = await this.#inputView.inputMoney();
      Validator.validatePurchaseMoney(Number(money));

      // 2. 로또 티켓 구입
      this.#lottoStore.purchaseLotto(Number(money));
      const lottoTickets = this.#lottoStore.getLottoTickets();
      this.#outputView.displayTickets(lottoTickets);

      // 3. 당첨 번호와 보너스 번호 입력받기 및 유효성 검사
      const winningNumbersInput = await this.#inputView.inputNumbers();
      const bonusNumberInput = await this.#inputView.inputBonusNumber();

      const winningNumbers = new WinningNumbers(
        winningNumbersInput.split(",").map(Number),
        Number(bonusNumberInput)
      );

      // 4. 통계 계산
      const statistics = ResultCalculator.calculateWinningStatistics(
        lottoTickets,
        winningNumbers
      );
      const returnRate = ResultCalculator.calculateReturnRate(
        statistics,
        money
      );

      // 5. 결과 출력
      this.#outputView.displayResults(statistics, returnRate);
    } catch (error) {
      this.#outputView.displayError(error.message);
    }
  }
}

export default LottoController;
