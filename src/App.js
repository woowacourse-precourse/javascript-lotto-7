import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
class App {
  async run() {
    try {
      const money = await Console.readLineAsync("구입금액을 입력해 주세요.");
      if (isNaN(money) || money % 1000 !== 0) {
        throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
      }
      const lotto_count = parseInt(money / 1000);
      Console.print(`${lotto_count}개를 구매했습니다.`);
      let lotto_tickets = [];
      for (let i = 0; i < lotto_count; i++) {
        const lotto_numbers = new Lotto(
          MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
            (a, b) => a - b
          )
        );
        lotto_tickets.push(lotto_numbers);
        Console.print(lotto_numbers.toString());
      }
      const lotto_answer = await Console.readLineAsync(
        "당첨 번호를 입력해 주세요."
      );
      const lotto_numbers = lotto_answer.split(",").map((num) => parseInt(num));
      Console.print(lotto_numbers);

      const lotto_bonus = await Console.readLineAsync(
        "보너스 번호를 입력해 주세요."
      );

      this.check_lotto(lotto_tickets, lotto_numbers, lotto_bonus);
    } catch (e) {
      Console.print(e.message);
      await this.run();
    }
  }

  check_lotto(lotto_tickets, lotto_numbers, lotto_bonus) {
    const prize = { 1: 2000000000, 2: 30000000, 3: 1500000, 4: 50000, 5: 5000 };
    const results = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };
    let total_prize = 0;

    lotto_tickets.forEach((lotto) => {
      const match_count = lotto.lotto_match(lotto_numbers);
      const bonus = lotto.lotto_bonus(lotto_bonus);
      if (match_count === 6) {
        results[6]++;
        total_prize += prize[1];
      }
      if (match_count === 5 && bonus) {
        results[5.5]++;
        total_prize += prize[2];
      }
      if (match_count === 5) {
        results[5]++;
        total_prize += prize[3];
      }
      if (match_count === 4) {
        results[4]++;
        total_prize += prize[4];
      }
      if (match_count === 3) {
        results[3]++;
        total_prize += prize[5];
      }
    });
    this.printResults(results, total_prize, lotto_tickets.length * 1000);
  }

  printResults(results, total_prize, total_spent) {
    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${results[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${results[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results[5]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${results[5.5]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${results[6]}개`);

    const profit_rate = ((total_prize / total_spent) * 100).toFixed(1);
    Console.print(`총 수익률은 ${profit_rate}%입니다.`);
  }
}

export default App;
