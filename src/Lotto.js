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
    numbers.forEach((num) => {
      if (num < 1 || num > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    });
  }

  // 매칭 결과로 개수 업데이트
  updateMatchCounts(matchCounts, matchCount, isBonusMatch) {
    if (matchCount === 6) {
      matchCounts[4]++; // 6개 일치
    } else if (matchCount === 5 && isBonusMatch) {
      matchCounts[3]++; // 5개 + 보너스 번호 일치
    } else if (matchCount === 5) {
      matchCounts[2]++; // 5개 일치
    } else if (matchCount === 4) {
      matchCounts[1]++; // 4개 일치
    } else if (matchCount === 3) {
      matchCounts[0]++; // 3개 일치
    }
  }

  // 매칭 개수 계산
  CalculateCount(userLottos, bonusNum) {
    const MATCH_COUNTS_LIST = [0, 0, 0, 0, 0];
    userLottos.forEach((lotto) => {
      const TOTAL_MATCH_CNT = this.countMatches(lotto);
      const BONUS_MATCH_BOOLEAN = this.isBonusMatch(lotto, bonusNum);
      this.updateMatchCounts(
        MATCH_COUNTS_LIST,
        TOTAL_MATCH_CNT,
        BONUS_MATCH_BOOLEAN
      );
    });
    return MATCH_COUNTS_LIST;
  }

  // 수익률 계산
  CalculatePrize(userCost, matchCounts) {
    const PRIZES = [5000, 50000, 1500000, 30000000, 2000000000];
    const TOTAL_PRIZE = matchCounts.reduce(
      (sum, count, index) => sum + count * PRIZES[index],
      0
    );
    const PROFIT_RATE = ((TOTAL_PRIZE / userCost) * 100).toFixed(1);
    return PROFIT_RATE;
  }

  // 통계 출력
  PrintResult(userCost, matchCounts) {
    const PROFIT_RATE = this.CalculatePrize(userCost, matchCounts);
    Console.print("당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${matchCounts[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${matchCounts[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${matchCounts[2]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchCounts[3]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${matchCounts[4]}개`);
    Console.print(`총 수익률은 ${PROFIT_RATE}%입니다.`);
  }
}

export default Lotto;
