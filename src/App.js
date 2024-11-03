import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
class App {
  async run() {
    try {
      const money = await this.get_money();
      const lotto_count = parseInt(money / 1000);
      Console.print(`${lotto_count}개를 구매했습니다.`);
      const lotto_tickets = this.make_lotto_tickets(lotto_count);
      const lotto_numbers = await this.get_lotto_answer();

      const lotto_bonus = await this.get_lotto_bonus();
      this.check_lotto(lotto_tickets, lotto_numbers, lotto_bonus);
    } catch (e) {
      Console.print(e.message);
      await this.run();
    }
  }
  async get_money() {
    const money = await Console.readLineAsync("구입금액을 입력해 주세요.");
    if (isNaN(money) || money % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
    }
    return money;
  }
  async get_lotto_answer() {
    const lotto_answer = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요."
    );
    return lotto_answer.split(",").map((num) => parseInt(num));
  }
  async get_lotto_bonus() {
    const lotto_bonus = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요."
    );
    return parseInt(lotto_bonus);
  }
  make_lotto_tickets(lotto_count) {
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
    return lotto_tickets;
  }
  check_lotto(lotto_tickets, lotto_numbers, lotto_bonus) {
    const results = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };
    let total_prize = 0;

    lotto_tickets.forEach((lotto) => {
      const match_count = lotto.lotto_match(lotto_numbers);
      const bonus = lotto.lotto_bonus(lotto_bonus);
      const { rank, prize } = this.determine_prize(match_count, bonus);
      if (rank !== 0) {
        results[rank]++;
        total_prize += prize;
      }
    });
    this.print_results(results, total_prize, lotto_tickets.length * 1000);
  }
  determine_prize(match_count, bonus) {
    const prizeTable = {
      6: { rank: 6, prize: 2000000000 },
      5.5: { rank: 5.5, prize: 30000000 },
      5: { rank: 5, prize: 1500000 },
      4: { rank: 4, prize: 50000 },
      3: { rank: 3, prize: 5000 },
    };

    if (match_count === 6) return prizeTable[6];
    if (match_count === 5 && bonus) return prizeTable[5.5];
    if (match_count === 5) return prizeTable[5];
    if (match_count === 4) return prizeTable[4];
    if (match_count === 3) return prizeTable[3];
    return { rank: 0, prize: 0 };
  }

  print_results(results, total_prize, total_spent) {
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
