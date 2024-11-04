import { Console } from "@woowacourse/mission-utils";
import { inputAmount, inputPrize, inputBouns } from "./getInput/InputValue.js";
import {
  calculateYield,
  calculateTotalPrize,
} from "./returnResult/calculateYield.js";
import LottoPurchase from "./setPurchasedLotto/LottoPurchase.js";
import winningResult from "./returnResult/winningResult.js";

class App {
  async run() {
    // 구매금액 입력
    const amount = await inputAmount();

    // 로또 발급
    const lottoBundle = LottoPurchase(amount);

    // 당첨 번호 입력
    const prize = await inputPrize();

    // 보너스 번호 입력
    const bonus = await inputBouns(prize);

    Console.print(`당첨 통계 \n---\n`);

    // 당첨 결과 + 수익률
    const score = winningResult(lottoBundle, prize, bonus);
    const totalPrize = calculateTotalPrize(score);
    const yields = calculateYield(totalPrize, amount);

    // 결과 출력
    const rankCounts = [0, 0, 0, 0, 0, 0];
    score.forEach((rank) => rankCounts[rank]++);

    Console.print(`3개 일치 (5,000원) - ${rankCounts[5]}개`);
    Console.print(`4개 일치 (50,000원) - ${rankCounts[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${rankCounts[3]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankCounts[2]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${rankCounts[1]}개`);
    Console.print(`총 수익률은 ${yields}%입니다.`);
  }
}

export default App;
