import Lotto from "../model/Lotto.js";
import InputView from "../view/InputView.js";
import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constant/messages.js";
import { validator } from "../utils/validator.js";

class LottoController {
  #inputView;
  #totalProfitRatio;
  constructor() {
    this.#inputView = new InputView();
    this.#totalProfitRatio = 0;
  }

  makeLottoTickets(numberOfLotto) {
    const tickets = [];
    for (let i = 0; i < numberOfLotto; i++) {
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

  async getBonusNumber(winningNumbers) {
    try {
      const bonusNumber = await this.#inputView.readBonusNumbers();

      validator.validateBonusNumber(winningNumbers, Number(bonusNumber.trim()));

      return Number(bonusNumber.trim());
    } catch (error) {
      console.log(error);
      this.getBonusNumber(winningNumbers);
    }
  }
  matchLotto(ticket, winningNumbers, bonusNumber) {
    let cnt = 0;
    let bonusCnt = 0;

    winningNumbers.forEach((number) => {
      if (ticket.includes(number)) {
        cnt += 1;
      }
    });
    if (ticket.includes(bonusNumber)) {
      bonusCnt += 1;
    }
    return [cnt, bonusCnt];
  }

  showTotalStatistic(TOTAL_STATISTIC) {
    Console.print(MESSAGES.OUTPUT.WINNING_STATISTICS);
    Console.print(MESSAGES.OUTPUT.matchingCount(3, false, TOTAL_STATISTIC[3]));
    Console.print(MESSAGES.OUTPUT.matchingCount(4, false, TOTAL_STATISTIC[4]));
    Console.print(MESSAGES.OUTPUT.matchingCount(5, false, TOTAL_STATISTIC[5]));
    Console.print(
      MESSAGES.OUTPUT.matchingCount(5, true, TOTAL_STATISTIC["bonus"])
    );
    Console.print(MESSAGES.OUTPUT.matchingCount(6, false, TOTAL_STATISTIC[6]));
  }
  getWinningResult(lottoTickets, winningNumbers, bonusNumber) {
    const TOTAL_STATISTIC = {
      3: 0,
      4: 0,
      5: 0,
      bonus: 0,
      6: 0,
    };

    for (const ticket of lottoTickets) {
      const [matchingCount, bonusMatchingCount] = this.matchLotto(
        ticket.getLottoNumbers(),
        winningNumbers,
        bonusNumber
      );
      if (matchingCount === 5 && bonusMatchingCount > 0) {
        TOTAL_STATISTIC["bonus"] += 1;
        continue;
      }
      if (matchingCount >= 3) {
        TOTAL_STATISTIC[matchingCount] += 1;
      }
    }
    return TOTAL_STATISTIC;
  }

  calculateTotalProfit(totalStatistic) {
    const MONEY_PER_MATCHING = {
      3: 5000,
      4: 50000,
      5: 1500000,
      bonus: 30000000,
      6: 2000000000,
    };
    let profit = 0;
    for (const matchingCount of Object.keys(totalStatistic)) {
      profit +=
        totalStatistic[matchingCount] * MONEY_PER_MATCHING[matchingCount];
    }

    return profit;
  }

  showTotalProfitRatio() {
    Console.print(MESSAGES.OUTPUT.ratioOfProfit(this.#totalProfitRatio));
  }

  async run() {
    try {
      const lottoAmountInput = await this.#inputView.readLottoAmount();
      const lottoAmount = Number(lottoAmountInput);

      validator.validateLottoAmount(lottoAmount);

      const numberOfLotto = lottoAmount / 1000;
      const lottoTickets = this.makeLottoTickets(numberOfLotto);
      // 로또 티켓 출력
      Console.print(MESSAGES.OUTPUT.lottoCount(numberOfLotto));

      for (const ticket of lottoTickets) {
        Console.print(ticket.getLottoNumbers());
      }

      const winningLottoNumbers = await this.getWinningLottoNumbers();

      const bonusNumber = await this.getBonusNumber(
        winningLottoNumbers.getLottoNumbers()
      );

      const totalStatistic = this.getWinningResult(
        lottoTickets,
        winningLottoNumbers.getLottoNumbers(),
        bonusNumber
      );
      this.showTotalStatistic(totalStatistic);

      this.#totalProfitRatio = (
        (this.calculateTotalProfit(totalStatistic) / lottoAmount) *
        100
      ).toFixed(1);

      this.showTotalProfitRatio();
    } catch (error) {
      console.log(error);
      this.run();
    }
  }
}
export default LottoController;
