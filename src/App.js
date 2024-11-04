import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { howManyLotto, getWinNumber, getBonusNumber } from "./Input.js";

class App {
  async run() {
    const results = [0, 0, 0, 0, 0];
    const lottoArray = await howManyLotto();
    const winNumbers = await getWinNumber();
    const bonusNum = await getBonusNumber(winNumbers);
    
    for (const numbers of lottoArray) {
      const matchCount = Lotto.getMatchedCount(numbers, winNumbers);
      const numInArray = numbers.getNumbers();
      const isBonusMatched = numInArray.includes(parseInt(bonusNum, 10));
      if (matchCount === 5 && isBonusMatched) results[1] += 1; // 2등
      if (matchCount === 6) results[0] += 1; // 1등
      if (matchCount >= 3 && matchCount !== 5) results[matchCount - 3] += 1; // 3등, 4등, 5등
    }
    Console.print(" ");
    Console.print("당첨 통계\n---");
    Console.print("5등: 3개 번호 일치 / 5,000원 - " + results[4] + "개");
    Console.print("4등: 4개 번호 일치 / 50,000원 - " + results[3] + "개");
    Console.print("3등: 5개 번호 일치 / 1,500,000원 - " + results[2] + "개");
    Console.print("2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원 - " + results[1] + "개");
    Console.print("1등: 6개 번호 일치 / 2,000,000,000원 - " + results[0] + "개");
    
  }
}

export default App;
