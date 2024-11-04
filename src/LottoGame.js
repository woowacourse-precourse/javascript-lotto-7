import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import LottoGenerator from "./LottoGenerator.js";

class LottoGame {
  constructor() {
    this.tickets = [];
    this.winningNumbers = [];
    this.bonusNumber = null;
  }

  async start() {
    while (true) {
      try {
        const purchaseAmount = await this.#getPurchaseAmount();
        this.#generateLottos(purchaseAmount);

        await this.#getWinningNumbers();
        await this.#getBonusNumber();

        this.#printLottoTickets();
        this.#printResults();
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #getPurchaseAmount() {
    const amount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    if (!/^\d+$/.test(amount)) {
      throw new Error("[ERROR] 구입 금액은 정수여야 합니다.");
    }
    const parsedAmount = parseInt(amount, 10);

    if (parsedAmount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위여야 합니다.");
    }

    return parsedAmount / 1000;
  }

  async #getWinningNumbers() {
    const numbersInput = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );
    const numbers = numbersInput.split(",").map((num) => {
      const parsedNum = Number(num.trim());

      if (!Number.isInteger(parsedNum)) {
        throw new Error("[ERROR] 당첨 번호는 정수여야 합니다.");
      }
      return parsedNum;
    });

    this.winningNumbers = numbers;

    if (
      this.winningNumbers.length !== 6 ||
      !this.#isValidLottoNumbers(this.winningNumbers)
    ) {
      throw new Error(
        "[ERROR] 당첨 번호는 1부터 45 사이의 숫자 6개여야 합니다."
      );
    }
  }

  async #getBonusNumber() {
    const bonusInput = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );
    const bonus = parseInt(bonusInput, 10);

    if (
      isNaN(bonus) ||
      bonus < 1 ||
      bonus > 45 ||
      this.winningNumbers.includes(bonus)
    ) {
      throw new Error(
        "[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 하며, 당첨 번호와 중복되지 않아야 합니다."
      );
    }
    this.bonusNumber = bonus;
  }
}

export default LottoGame;
