import { Console, Random } from "@woowacourse/mission-utils";

class App {
  #validatePurchaseAmount(amount) {
    if (amount < 1000) {
      throw new Error("[ERROR] 구입 금액은 최소 1,000원 이상이어야 합니다.");
    }
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
    }
  }

  async run() {
    const purchasePrice = Number(await Console.readLineAsync("구입금액을 입력해 주세요.\n"));
    this.#validatePurchaseAmount(purchasePrice);

    const lottoCount = purchasePrice / 1000;
    Console.print(`\n${lottoCount}개를 구매했습니다.`)

    const lottoArr = [];

    for (let i = 0; i < lottoCount; i++) {
      const randomNums = Random.pickUniqueNumbersInRange(1, 45, 6)
      lottoArr.push(randomNums);
    }

    const sortedLottoArr = lottoArr.map(nums => nums.map(Number).sort((a, b) => a - b));

    sortedLottoArr.forEach(arr => {
      Console.print(`[${arr.join(', ')}]`); // 배열을 대괄호로 감싸서 출력
    });

    const winningNumbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const bonusNumber = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");

    const prizeStatistics = {
      first: { id: 6, count: 0, prize: 2000000000 },
      second: { id: 5, count: 0, prize: 30000000 },
      third: { id: 5, count: 0, prize: 1500000 },
      fourth: { id: 4, count: 0, prize: 50000 },
      fifth: { id: 3, count: 0, prize: 5000 }
    };

    let totalPrizeMoney = 0;
    lottoArr.forEach(lottoNumbers => {
      const matchCount = lottoNumbers.filter(num => winningNumbers.split(',').map(Number).includes(num)).length;
      const hasBonus = lottoNumbers.includes(Number(bonusNumber));

      if (matchCount === 6) {
        prizeStatistics.first.count += 1;
        totalPrizeMoney += prizeStatistics.first.prize;
        return;
      }

      if (matchCount === 5 && hasBonus) {
        prizeStatistics.second.count += 1;
        totalPrizeMoney += prizeStatistics.second.prize;
        return;
      }

      if (matchCount === 5) {
        prizeStatistics.third.count += 1;
        totalPrizeMoney += prizeStatistics.third.prize;
        return;
      }

      if (matchCount === 4) {
        prizeStatistics.fourth.count += 1;
        totalPrizeMoney += prizeStatistics.fourth.prize;
        return;
      }

      if (matchCount === 3) {
        prizeStatistics.fifth.count += 1;
        totalPrizeMoney += prizeStatistics.fifth.prize;
      }
    });
  }
}
export default App;
