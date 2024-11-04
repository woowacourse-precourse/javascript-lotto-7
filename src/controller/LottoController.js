import Lotto from "../model/Lotto.js";
import InputView from "../view/InputView.js";
import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constant/messages.js";
import { validator } from "../utils/validator.js";
import { PROFIT_PER_MATCHING } from "../constant/profit.js";
import {
  LOTTO_NUMBER_COUNT,
  LOTTO_NUMBER_MAX,
  LOTTO_NUMBER_MIN,
  MATCHING_COUNT,
  PERCENTAGE,
  ROUNDING_DIGITS,
  TICKET_PRICE_UNIT,
} from "../constant/number.js";

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

    this.#totalStatistic = {
      [MATCHING_COUNT.three]: 0,
      [MATCHING_COUNT.four]: 0,
      [MATCHING_COUNT.five]: 0,
      bonus: 0,
      [[MATCHING_COUNT.six]]: 0,
    };
  }

  makeLottoTickets() {
    const tickets = [];
    for (let i = 0; i < this.#numberOfLotto; i++) {
      const numbers = Random.pickUniqueNumbersInRange(
        LOTTO_NUMBER_MIN,
        LOTTO_NUMBER_MAX,
        LOTTO_NUMBER_COUNT
      );
      tickets.push(new Lotto(numbers));
    }
    return tickets;
  }

  async getWinningLottoNumbers() {
    try {
      const winningLottoNumbers =
        await this.#inputView.readWinningLottoNumbers();
      this.#winningLottoNumbers = validator.validateWinningLottoNumbers(
        winningLottoNumbers.trim()
      );
    } catch (error) {
      console.log(error);
      return await this.getWinningLottoNumbers();
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
      this.#bonusNumber = Number(bonusNumber.trim());
    } catch (error) {
      console.log(error);
      return await this.getBonusNumber();
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
    Console.print(MESSAGES.output.winning_statistic);
    Console.print(
      MESSAGES.output.matchingCount(
        MATCHING_COUNT.three,
        false,
        this.#totalStatistic[MATCHING_COUNT.three]
      )
    );
    Console.print(
      MESSAGES.output.matchingCount(
        MATCHING_COUNT.four,
        false,
        this.#totalStatistic[MATCHING_COUNT.four]
      )
    );
    Console.print(
      MESSAGES.output.matchingCount(
        MATCHING_COUNT.five,
        false,
        this.#totalStatistic[MATCHING_COUNT.five]
      )
    );
    Console.print(
      MESSAGES.output.matchingCount(
        MATCHING_COUNT.five,
        true,
        this.#totalStatistic["bonus"]
      )
    );
    Console.print(
      MESSAGES.output.matchingCount(
        MATCHING_COUNT.six,
        false,
        this.#totalStatistic[MATCHING_COUNT.six]
      )
    );
  }
  getWinningResult() {
    for (const ticket of this.#lottoTickets) {
      const [matchingCount, bonusMatchingCount] = this.returnMatchLotto(
        ticket.getLottoNumbers()
      );
      if (matchingCount === MATCHING_COUNT.five && bonusMatchingCount > 0) {
        this.#totalStatistic["bonus"] += 1;
        continue;
      }
      if (matchingCount >= MATCHING_COUNT.three) {
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
    Console.print(MESSAGES.output.ratioOfProfit(this.#totalProfitRatio));
  }

  async getLottoAmount() {
    try {
      const lottoAmountInput = await this.#inputView.readLottoAmount();
      const lottoAmount = Number(lottoAmountInput);

      validator.validateLottoAmount(lottoAmount);
      this.#lottoAmount = lottoAmount;
    } catch (error) {
      console.log(error);
      return this.getLottoAmount();
    }
  }

  printLottoTicketCount() {
    this.#numberOfLotto = this.#lottoAmount / TICKET_PRICE_UNIT;
    // 로또 티켓 개수 출력
    Console.print(MESSAGES.output.lottoCount(this.#numberOfLotto));
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
      (this.calculateTotalProfit() / this.#lottoAmount) *
      PERCENTAGE
    ).toFixed(ROUNDING_DIGITS);

    this.showTotalProfitRatio();
  }
  async run() {
    await this.getLottoAmount();
    this.printLottoTicketCount();
    this.#lottoTickets = this.makeLottoTickets();
    this.printLottoTickets();
    await this.getWinningLottoNumbers();
    await this.getBonusNumber();
    if (this.#isAllInputValidationPass) this.showWinningResult();
  }
}
export default LottoController;
