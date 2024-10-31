import { Console } from "@woowacourse/mission-utils";
import getRandomNumbers from "../utils/random";

const OutputView = {
  printNumberOfPurchases(count) {
    Console.print(`\n${count}개를 구매했습니다.`);
  },

  printLottoIssue(count) {
    for (let i = 0; i < count; i++) {
      Console.print(getRandomNumbers());
    }
  },
};

export default OutputView;
