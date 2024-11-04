import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    const purchaseMoney = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    let lottos = Array.from({ length: purchaseMoney / 1000 }, () =>
      MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
    );

    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos = lottos.map((lotto) => {
      Console.print(lotto);
      return new Lotto(lotto);
    });

    const winningNumber = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );

    const bonusNumber = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );

    const matchResults = lottos.map((lotto) => ({
      matches: lotto.confirmMatches(winningNumber),
      matchBonus: lotto.confirmBonus(bonusNumber),
    }));
    Console.print(matchResults);

    // 통계 출력
    Console.print("\n당첨 통계\n---");
    const winningStats = this.calculateWinningStats(matchResults);
    this.printWinningStats(winningStats);
  }

  calculateWinningStats(results) {
    const stats = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, "5_bonus": 0, 6: 0 };

    results.forEach(({ matches, hasBonus }) => {
      if (matches === 5 && hasBonus) {
        stats["5_bonus"] += 1;
        return;
      }
      stats[matches] += 1;
    });
    return stats;
  }

  printWinningStats(stats) {
    console.log(`3개 일치 (5,000원) - ${stats[3]}개`);
    console.log(`4개 일치 (50,000원) - ${stats[4]}개`);
    console.log(`5개 일치 (1,500,000원) - ${stats[5]}개`);
    console.log(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${stats["5_bonus"]}개`
    );
    console.log(`6개 일치 (2,000,000,000원) - ${stats[6]}개`);
  }
}

export default App;
