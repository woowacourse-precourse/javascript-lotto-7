import { Console } from "@woowacourse/mission-utils";
import Lottos from "./Lottos.js";

const isValidCost = (cost) => {
  if (cost % 1000 !== 0)
    throw new Error("[ERROR] 구매 금액은 1000원 단위여야 합니다.");
};

const purchaseLotto = (cost) => {
  isValidCost(cost);

  const purchaseCount = cost / 1000;

  Console.print(`\n${purchaseCount}개를 구매했습니다.`);

  const lottos = new Lottos(purchaseCount);

  return lottos;
};

export default purchaseLotto;
