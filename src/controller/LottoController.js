import Lotto from "../model/Lotto.js";
import inputView from "../view/InputView.js";
import { Random } from "@woowacourse/mission-utils";
import { validator } from "../utils/validator.js";
import { PROFIT_PER_MATCHING } from "../constant/profit.js";
import {
  LOTTO_NUMBER_COUNT,
  LOTTO_NUMBER_MAX,
  LOTTO_NUMBER_MIN,
  MATCHING_COUNT,
  PERCENTAGE,
  ROUNDING_DIGITS,
  LOTTO_TICKET_PRICE_UNIT,
} from "../constant/number.js";
import outputView from "../view/OutputView.js";

class LottoController {
  #lottoAmount; // 로또 금액
  #totalProfitRatio; // 총 수익률
  #numberOfLotto;
  #lottoTickets;
  #winningLottoNumbers;
  #bonusNumber;
  #totalStatistic; // 당첨 통계
  constructor() {
    this.#totalProfitRatio = 0;
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
    this.#lottoTickets = tickets;
  }

  async getWinningLottoNumbers() {
    try {
      const winningLottoNumbers = await inputView.readWinningLottoNumbers();
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
      const bonusNumber = await inputView.readBonusNumbers();

      validator.validateBonusNumber(
        this.#winningLottoNumbers,
        Number(bonusNumber.trim())
      );

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
    outputView.printWinningStatistic();
    outputView.printMatchingCountIsThree(this.#totalStatistic);
    outputView.printMatchingCountIsFour(this.#totalStatistic);
    outputView.printMatchingCountIsFive(this.#totalStatistic);
    outputView.printMatchingCountIsFiveAndBonus(this.#totalStatistic);
    outputView.printMatchingCountIsSix(this.#totalStatistic);
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
    outputView.printotalProfitRatio(this.#totalProfitRatio);
  }

  async getLottoAmount() {
    try {
      const lottoAmountInput = await inputView.readLottoAmount();
      const lottoAmount = Number(lottoAmountInput);

      validator.validateLottoAmount(lottoAmount);
      this.#lottoAmount = lottoAmount;
    } catch (error) {
      console.log(error);
      return this.getLottoAmount();
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

  calculateNumberOfTickets() {
    this.#numberOfLotto = this.#lottoAmount / LOTTO_TICKET_PRICE_UNIT;
  }
  async run() {
    await this.getLottoAmount();
    this.calculateNumberOfTickets();
    outputView.printLottoTicketCount(this.#numberOfLotto);
    this.makeLottoTickets();
    outputView.printLottoTickets(this.#lottoTickets);
    await this.getWinningLottoNumbers();
    await this.getBonusNumber();
    this.showWinningResult();
  }
}
export default LottoController;
