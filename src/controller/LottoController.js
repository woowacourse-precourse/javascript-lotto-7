import Lotto from "../model/Lotto.js";
import InputView from "../view/InputView.js";
import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constant/messages.js";
import { validator } from "../utils/validator.js";
import { PROFIT_PER_MATCHING } from "../constant/profit.js";

class LottoController {
  #inputView;
  #lottoAmount;
  #totalProfitRatio;
  #numberOfLotto;
  #lottoTickets;
  #winningLottoNumbers;
  #bonusNumber;
  #isAllInputValidationPass;
  #totalStatistic;
  constructor() {
    this.#inputView = new InputView();
    this.#totalProfitRatio = 0;
    this.#isAllInputValidationPass = false;
    this.#totalStatistic = { 3: 0, 4: 0, 5: 0, bonus: 0, 6: 0 };
  }

  makeLottoTickets() {
    const tickets = [];
    for (let i = 0; i < this.#numberOfLotto; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      tickets.push(new Lotto(numbers));
    }
    return tickets;
  }

  async getWinningLottoNumbers() {
    try {
      const winningLottoNumbers =
        await this.#inputView.readWinningLottoNumbers();

      return validator.validateWinningLottoNumbers(winningLottoNumbers.trim());
    } catch (error) {
      console.log(error);
      this.getWinningLottoNumbers();
    }
  }

  async getBonusNumber() {
    try {
      const bonusNumber = await this.#inputView.readBonusNumbers();

      validator.validateBonusNumber(
        this.#winningLottoNumbers,
        Number(bonusNumber.trim())
      );

      this.#isAllInputValidationPass = true;
      return Number(bonusNumber.trim());
    } catch (error) {
      console.log(error);
      this.getBonusNumber();
    }
  }

  returnMatchLotto(ticket) {
    let cnt = 0;
    let bonusCnt = 0;

    this.#winningLottoNumbers.forEach((number) => {
      if (ticket.includes(number)) {
        cnt += 1;
      }
    });
    if (ticket.includes(this.#bonusNumber)) {
      bonusCnt += 1;
    }
    return [cnt, bonusCnt];
  }

  showTotalStatistic() {
    Console.print(MESSAGES.OUTPUT.WINNING_STATISTICS);
    Console.print(
      MESSAGES.OUTPUT.matchingCount(3, false, this.#totalStatistic[3])
    );
    Console.print(
      MESSAGES.OUTPUT.matchingCount(4, false, this.#totalStatistic[4])
    );
    Console.print(
      MESSAGES.OUTPUT.matchingCount(5, false, this.#totalStatistic[5])
    );
    Console.print(
      MESSAGES.OUTPUT.matchingCount(5, true, this.#totalStatistic["bonus"])
    );
    Console.print(
      MESSAGES.OUTPUT.matchingCount(6, false, this.#totalStatistic[6])
    );
  }
  getWinningResult() {
    for (const ticket of this.#lottoTickets) {
      const [matchingCount, bonusMatchingCount] = this.returnMatchLotto(ticket);
      if (matchingCount === 5 && bonusMatchingCount > 0) {
        this.#totalStatistic["bonus"] += 1;
        continue;
      }
      if (matchingCount >= 3) {
        this.#totalStatistic[matchingCount] += 1;
      }
    }
  }

  calculateTotalProfit() {
    let profit = 0;
    for (const matchingCount of Object.keys(this.#totalStatistic)) {
      profit +=
        this.#totalStatistic[matchingCount] *
        PROFIT_PER_MATCHING[matchingCount];
    }

    return profit;
  }

  showTotalProfitRatio() {
    Console.print(MESSAGES.OUTPUT.ratioOfProfit(this.#totalProfitRatio));
  }

  async getLottoAmount() {
    const lottoAmountInput = await this.#inputView.readLottoAmount();
    const lottoAmount = Number(lottoAmountInput);

    validator.validateLottoAmount(lottoAmount);
    this.#lottoAmount = lottoAmount;
  }

  printLottoTicketCount() {
    this.#numberOfLotto = this.#lottoAmount / 1000;
    // 로또 티켓 개수 출력
    Console.print(MESSAGES.OUTPUT.lottoCount(this.#numberOfLotto));
  }

  printLottoTickets() {
    for (const ticket of this.#lottoTickets) {
      Console.print(ticket.getLottoNumbers());
    }
  }

  showWinningResult() {
    const totalStatistic = this.getWinningResult();
    this.showTotalStatistic(totalStatistic);

    this.#totalProfitRatio = (
      (this.calculateTotalProfit() / lottoAmount) *
      100
    ).toFixed(1);

    this.showTotalProfitRatio();
  }
  async run() {
    try {
      await this.getLottoAmount();
      this.printLottoTicketCount();
      this.#lottoTickets = this.makeLottoTickets();
      this.printLottoTickets();
      this.#winningLottoNumbers = await this.getWinningLottoNumbers();

      this.#bonusNumber = await this.getBonusNumber();

      if (this.#isAllInputValidationPass) this.showWinningResult();
    } catch (error) {
      console.log(error);
      this.run();
    }
  }
}
export default LottoController;
