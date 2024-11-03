import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

const isValidCost = (cost) => {
  if (cost % 1000 !== 0)
    throw new Error("[ERROR] 구매 금액은 1000원 단위여야 합니다.");
};

const purchaseLotto = (cost) => {
  isValidCost(cost);

  const purchaseCount = cost / 1000;

  Console.print(`\n${purchaseCount}개를 구매했습니다.`);
  for (let i = 0; i < purchaseCount; i++) {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    const lotto = new Lotto(randomNumbers);
    Console.print(lotto.getNumbers());
  }
};

export default purchaseLotto;
