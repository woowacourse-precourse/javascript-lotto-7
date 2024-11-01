import { Console, Random } from "@woowacourse/mission-utils";

class App {
  #lottos = [];
  #winningNumbers;
  #bonusNumber;

  async run() {
    const amount = await this.#readAmount();
    const lottoCount = Math.floor(amount / 1000);
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    this.#generateLottoNumbers(lottoCount);
    this.#winningNumbers = await this.#readWinningNumbers();
    this.#bonusNumber = await this.#readBonusNumber();
    const matches = this.#matchLottoNumbers();
    const results = this.#calculateResults(matches);
    this.#printResults(results);
    const profitRate = this.#calculateProfitRate(results, amount);
  }

  async #readAmount() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return Number(input);
  }

  #generateLottoNumbers(count) {
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortedNumbers = numbers.sort((a, b) => a - b);
      this.#lottos.push(sortedNumbers);
      Console.print(`[${sortedNumbers.join(", ")}]`);
    }
  }

  async #readWinningNumbers() {
    const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    return input.split(",").map((number) => Number(number.trim()));
  }

  async #readBonusNumber() {
    const input = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n",
    );
    return Number(input);
  }

  #printResults(results) {
    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${results[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${results[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results[5]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${results["5+"]}개`,
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${results[6]}개`);
  }

  #matchLottoNumbers() {
    return this.#lottos.map((lotto) => {
      const matchCount = lotto.filter((number) =>
        this.#winningNumbers.includes(number),
      ).length;
      const hasBonus = matchCount === 5 && lotto.includes(this.#bonusNumber);
      return { matchCount, hasBonus };
    });
  }

  #calculateResults(matches) {
    const results = { 3: 0, 4: 0, 5: 0, "5+": 0, 6: 0 };

    matches.forEach(({ matchCount, hasBonus }) => {
      if (matchCount === 6) results[6]++;
      else if (matchCount === 5 && hasBonus) results["5+"]++;
      else if (matchCount === 5) results[5]++;
      else if (matchCount === 4) results[4]++;
      else if (matchCount === 3) results[3]++;
    });

    return results;
  }

  #calculateProfitRate(results, amount) {
    const prizeMap = {
      3: 5000,
      4: 50000,
      5: 1500000,
      "5+": 30000000,
      6: 2000000000,
    };

    const totalPrize = Object.entries(results).reduce(
      (sum, [rank, count]) => sum + prizeMap[rank] * count,
      0,
    );

    return ((totalPrize / amount) * 100).toFixed(1);
  }
}

export default App;
