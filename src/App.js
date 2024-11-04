import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    let result = this.getResult(comparedList);

    let rate = this.getRate(result[1], price);

    Console.print("당첨 통계\n---");
    Console.print(result[0]);
    Console.print(`총 수익률은 ${rate}%입니다.`);
  }

  getRate(result, price) {
    const prizeMoney = {
      3: 5000,
      4: 50000,
      5: 1500000,
      "5(bonus)": 30000000,
      6: 2000000000,
    };

    let totalPrize =
      result[3] * prizeMoney[3] +
      result[4] * prizeMoney[4] +
      result[5] * prizeMoney[5] +
      result["5(bonus)"] * prizeMoney["5(bonus)"] +
      result[6] * prizeMoney[6];

    let rate = ((totalPrize / price) * 100).toFixed(1);
    return rate;
  }
}

export default App;
