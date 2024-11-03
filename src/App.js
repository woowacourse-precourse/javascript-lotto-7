import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async run() {
    try {
      const purchaseAmount = await this.#inputPurchaseAmount();
      const winningNumbers = await this.#inputWinningNumbers();
      const bonusNumber = await this.#inputBonusNumber(winningNumbers);

      const ticketCount = this.#calculateTicketCount(purchaseAmount);
      this.#printTicketCount(ticketCount);

      const lottos = this.#generateLottos(ticketCount);
      this.#printLottos(lottos);

      const prizeCount = this.#calculatePrizes(
        lottos,
        winningNumbers,
        bonusNumber
      );
      this.#printResults(prizeCount);

      const profitRate = this.#calculateProfitRate(
        purchaseAmount,
        prizeCount.totalPrize
      );
      Console.print(`총 수익률은 ${profitRate}%입니다.`);
    } catch (error) {
      Console.print(error.message);
    }
  }

  async #inputPurchaseAmount() {
    const amount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return this.#validatePurchaseAmount(Number(amount));
  }

  #validatePurchaseAmount(amount) {
    if (!Number.isInteger(amount) || amount < 1000 || amount % 1000 !== 0) {
      Console.print('[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.');
      return this.#inputPurchaseAmount();
    }
    return amount;
  }

  async #inputWinningNumbers() {
    const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    return this.#validateWinningNumbers(input.split(',').map(Number));
  }

  #validateWinningNumbers(numbers) {
    if (
      numbers.length !== 6 ||
      new Set(numbers).size !== 6 ||
      numbers.some((n) => n < 1 || n > 45)
    ) {
      Console.print(
        '[ERROR] 로또 번호는 중복 없이 1부터 45 사이의 숫자 6개여야 합니다.'
      );
      return this.#inputWinningNumbers();
    }
    return numbers;
  }

  async #inputBonusNumber(winningNumbers) {
    const input = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    return this.#validateBonusNumber(Number(input), winningNumbers);
  }

  #validateBonusNumber(bonusNumber, winningNumbers) {
    if (
      !Number.isInteger(bonusNumber) ||
      bonusNumber < 1 ||
      bonusNumber > 45 ||
      winningNumbers.includes(bonusNumber)
    ) {
      Console.print(
        '[ERROR] 보너스 번호는 1부터 45 사이의 숫자 중 당첨 번호와 중복되지 않게 입력해야 합니다.'
      );
      return this.#inputBonusNumber(winningNumbers);
    }
    return bonusNumber;
  }

  #printTicketCount(ticketCount) {
    Console.print(`${ticketCount}개를 구매했습니다.`);
  }

  #calculateTicketCount(purchaseAmount) {
    return Math.floor(purchaseAmount / 1000);
  }

  #generateLottos(ticketCount) {
    return Array.from({ length: ticketCount }, () => Lotto.generate());
  }

  #printLottos(lottos) {
    lottos.forEach((lotto) =>
      Console.print(`[${lotto.getNumbers().join(', ')}]`)
    );
  }

  #checkWinning(lotto, winningNumbers, bonusNumber) {
    const matchCount = lotto
      .getNumbers()
      .filter((num) => winningNumbers.includes(num)).length;
    const hasBonus = lotto.getNumbers().includes(bonusNumber);

    if (matchCount === 6) return { rank: 1, prize: 2000000000 };
    if (matchCount === 5 && hasBonus) return { rank: 2, prize: 30000000 };
    if (matchCount === 5) return { rank: 3, prize: 1500000 };
    if (matchCount === 4) return { rank: 4, prize: 50000 };
    if (matchCount === 3) return { rank: 5, prize: 5000 };
    return { rank: 0, prize: 0 };
  }

  #calculatePrizes(lottos, winningNumbers, bonusNumber) {
    let totalPrize = 0;
    const prizeCount = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    lottos.forEach((lotto) => {
      const { rank, prize } = this.#checkWinning(
        lotto,
        winningNumbers,
        bonusNumber
      );
      if (rank > 0) {
        prizeCount[rank]++;
        totalPrize += prize;
      }
    });
    prizeCount.totalPrize = totalPrize;
    return prizeCount;
  }

  #calculateProfitRate(totalSpent, totalPrize) {
    return ((totalPrize / totalSpent) * 100).toFixed(1);
  }

  #printResults(prizeCount) {
    Console.print('당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${prizeCount[5]}개`);
    Console.print(`4개 일치 (50,000원) - ${prizeCount[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${prizeCount[3]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${prizeCount[2]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${prizeCount[1]}개`);
  }
}

export default App;
