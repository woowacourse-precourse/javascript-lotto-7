import { Console } from "@woowacourse/mission-utils";
import { isValidPrice, isZeroPrice } from "./errors/LottoInputErrors.js";
import {
  getLottoCount,
  getLottoNums,
  getWinningNumbers,
} from "./services/LottoGenerator.js";
import Lotto from "./Lotto.js";

class App {
  async run() {
    const lottoPriceInput = await Console.readLineAsync(
      "구입금액을 입력해 주세요."
    );
    const lottoPrice = Number(lottoPriceInput.trim());
    isZeroPrice(lottoPrice);
    isValidPrice(lottoPrice);

    const lottoCount = getLottoCount(lottoPrice);
    const lottoNumbers = getLottoNums(lottoCount);

    const lottoTickets = lottoNumbers.map((numbers) => new Lotto(numbers));

    Console.print(`${lottoCount}개를 구매했습니다.`);
    lottoTickets.forEach((ticket) => {
      const sortedNumbers = ticket
        .getNumbers()
        .sort((a, b) => a - b)
        .join(", ");
      Console.print(`[${sortedNumbers}]`);
    });

    const winNums = await Console.readLineAsync("당첨 번호를 입력해 주세요.");
    const winningNums = getWinningNumbers(winNums);
    const winningTicket = new Lotto(winningNums);
  }
}

export default App;
