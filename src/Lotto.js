import { Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  CalculateResult(userLottos, bonusNum) {
    const MATCH_COUNTS_LIST = [0, 0, 0, 0, 0];
    userLottos.forEach((lotto) => {
      const TOTAL_MATCH_CNT = lotto.filter((num) =>
        this.#numbers.includes(num)
      ).length;
      const BONUS_MATCH_BOOLEAN = lotto.includes(bonusNum);

      if (TOTAL_MATCH_CNT === 6) {
        MATCH_COUNTS_LIST[4]++; // 6개 일치
      } else if (TOTAL_MATCH_CNT === 5 && BONUS_MATCH_BOOLEAN) {
        MATCH_COUNTS_LIST[3]++; // 5개 + 보너스 번호 일치
      } else if (TOTAL_MATCH_CNT === 5) {
        MATCH_COUNTS_LIST[2]++; // 5개 일치
      } else if (TOTAL_MATCH_CNT === 4) {
        MATCH_COUNTS_LIST[1]++; // 4개 일치
      } else if (TOTAL_MATCH_CNT === 3) {
        MATCH_COUNTS_LIST[0]++; // 3개 일치
      }
    });

    return MATCH_COUNTS_LIST; // 계산된 결과를 반환
  }

  PrintResult(userCost, matchCounts) {
    const PRIZES = [5000, 50000, 1500000, 30000000, 2000000000];
    const TOTAL_PRIZE = matchCounts.reduce(
      (sum, count, index) => sum + count * PRIZES[index],
      0
    );

    const profitRate = ((TOTAL_PRIZE / userCost) * 100).toFixed(1);

    Console.print("당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${matchCounts[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${matchCounts[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${matchCounts[2]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchCounts[3]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${matchCounts[4]}개`);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default Lotto;
