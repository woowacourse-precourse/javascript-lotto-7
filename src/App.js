import { Console } from "@woowacourse/mission-utils";
import {
  isBonusPriceNum,
  isDuplicateNum,
  isPriceNum,
  isValidPrice,
  isZeroPrice,
  validateBonusNumber,
  validateNumRange,
} from "./errors/LottoInputErrors.js";
import {
  getLottoCount,
  getLottoNums,
  getWinningNumbers,
} from "./services/LottoGenerator.js";
import Lotto from "./Lotto.js";
import {
  printStatistics,
  updatePrizeCount,
} from "./services/LottoPrizeAnalyzer.js";

class App {
  async run() {
    const lottoPrice = await this.getLottoPrice();
    const lottoCount = getLottoCount(lottoPrice);
    const lottoNumbers = getLottoNums(lottoCount);
    const lottoTickets = lottoNumbers.map((numbers) => new Lotto(numbers));

    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    lottoTickets.forEach((ticket) => {
      const sortedNumbers = ticket
        .getNumbers()
        .sort((a, b) => a - b)
        .join(", ");
      Console.print(`[${sortedNumbers}]`);
    });

    const winningTicket = await this.getWinningNumbers();
    const bonusNum = await this.getBonusNumber(winningTicket);

    lottoTickets.forEach((ticket) => {
      const matchCount = ticket.getMatchCount(winningTicket);
      const bonusMatched = ticket.getNumbers().includes(bonusNum);
      updatePrizeCount(matchCount, bonusMatched);
    });

    printStatistics(lottoPrice);
  }

  async getLottoPrice() {
    try {
      const lottoPriceInput = await Console.readLineAsync(
        "구입금액을 입력해 주세요.\n"
      );
      const lottoPrice = parseInt(lottoPriceInput.trim(), 10);

      isPriceNum(lottoPrice);
      isZeroPrice(lottoPrice);
      isValidPrice(lottoPrice);

      return lottoPrice;
    } catch (error) {
      Console.print(error.message);
      return this.getLottoPrice();
    }
  }

  async getWinningNumbers() {
    try {
      const winNums = await Console.readLineAsync(
        "\n당첨 번호를 입력해 주세요.\n"
      );
      const winningNums = getWinningNumbers(winNums);
      return new Lotto(winningNums);
    } catch (error) {
      Console.print(error.message);
      return this.getWinningNumbers();
    }
  }

  async getBonusNumber(winningTicket) {
    try {
      const bonusNumInput = await Console.readLineAsync(
        "\n보너스 번호를 입력해 주세요\n"
      );
      const bonusNum = parseInt(bonusNumInput, 10);

      isBonusPriceNum(bonusNum);
      isDuplicateNum(bonusNum, winningTicket.getNumbers());
      validateNumRange(bonusNum);
      validateBonusNumber(bonusNum);

      return bonusNum;
    } catch (error) {
      Console.print(error.message);
      return this.getBonusNumber(winningTicket);
    }
  }
}

export default App;
