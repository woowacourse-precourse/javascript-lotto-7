import { Console } from "@woowacourse/mission-utils";
import Lottos from "./Lottos.js";
import { isValidCost } from "./validate.js";

const purchaseLotto = (cost) => {
  isValidCost(cost);

  const purchaseCount = cost / 1000;

  Console.print(`\n${purchaseCount}개를 구매했습니다.`);

  const lottos = new Lottos(purchaseCount);

  return lottos;
};

export default purchaseLotto;
