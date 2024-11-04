import { Random } from "@woowacourse/mission-utils";
import { LOTTO_PRICE, NUMBER_PRIZE_MONEY } from "./constants.js";

class LottoController {
  #lottoService;
  #lottoView;

  constructor(lottoService, lottoView) {
    this.#lottoService = lottoService;
    this.#lottoView = lottoView;
  }

  async init() {
    await this.handleUserBudget();
  }

  async handleUserBudget() {
    const budget = await this.#lottoView.receiveBudget();
    const maxLottoCount = this.#lottoService.getMaxLottoCount(budget);

    this.#lottoView.printNumberOfLottos(maxLottoCount);

    for (let lottoCount = 0; lottoCount < maxLottoCount; lottoCount++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottoService.addLotto(numbers);
    }
    this.#lottoView.printLottos(this.#lottoService.getLottos());

    const winningNumbers = await this.#lottoView.receiveWinningNumber();
    const bonusNumber = await this.#lottoView.receiveBonusNumber();

    const winningStats = this.#lottoService.getWinningStats(bonusNumber, winningNumbers);
    this.#lottoView.printWinningStats(winningStats);

    const profitMargin = this.#lottoService.getProfitMargin(LOTTO_PRICE, NUMBER_PRIZE_MONEY);
    this.#lottoView.printProfitMargin(profitMargin);
  }
}

export default LottoController;
