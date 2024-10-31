import Lotto from "../model/Lotto.js";
import InputView from "../view/InputView.js";
import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constant/messages.js";
class LottoController {
  #inputView;
  #totalProfit;
  constructor() {
    this.#inputView = new InputView();
    this.#totalProfit = 0;
  }
  validateLottoAmount(amount) {
    if (isNaN(amount)) {
      throw new Error(`[ERROR] 로또 금액은 숫자로 입력해야합니다.\n`);
    }

    if (amount < 0 || amount % 1000 !== 0) {
      throw new Error(`[ERROR] 로또 금액은 1000원 단위의 양수여야 합니다.\n`);
    }
  }
  makeLottoTickets(numberOfLotto) {
    const tickets = [];
    for (let i = 0; i < numberOfLotto; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      tickets.push(new Lotto(numbers));
    }
    return tickets;
  }
  validateWinningLottoNumbers(numbers) {
    try {
      return new Lotto(numbers.split(",").map((e) => +e));
    } catch (error) {
      throw error;
    }
  }

  validateBonusNumberType(bonusNumber) {
    if (isNaN(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }
  }
  validateBonusNumberUniqueness(winningNumbers, bonusNumber) {
    if (winningNumbers.some((number) => bonusNumber === number)) {
      throw new Error(
        "[ERROR] 보너스 번호는 로또 당첨 번호 숫자와 겹치지 않아야 합니다."
      );
    }
  }
  validateBonusNumberRange(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호는 1에서 45 사이의 양수여야 합니다.");
    }
  }

  validateBonusNumber(winningNumbers, bonusNumber) {
    try {
      this.validateBonusNumberType(bonusNumber);
      this.validateBonusNumberUniqueness(winningNumbers, bonusNumber);
      this.validateBonusNumberRange(bonusNumber);
    } catch (error) {
      throw error;
    }
  }
  async getWinningLottoNumbers() {
    try {
      const winningLottoNumbers =
        await this.#inputView.readWinningLottoNumbers();

      return this.validateWinningLottoNumbers(winningLottoNumbers.trim());
    } catch (error) {
      console.log(error);
      this.getWinningLottoNumbers();
    }
  }

  async getBonusNumber(winningNumbers) {
    try {
      const bonusNumber = await this.#inputView.readBonusNumbers();

      this.validateBonusNumber(winningNumbers, Number(bonusNumber.trim()));

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
  async run() {
    try {
      const lottoAmountInput = await this.#inputView.readLottoAmount();
      const lottoAmount = Number(lottoAmountInput);

      this.validateLottoAmount(lottoAmount);

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
    } catch (error) {
      console.log(error);
      this.run();
    }
  }
}
export default LottoController;
