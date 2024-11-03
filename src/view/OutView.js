import { Console } from "@woowacourse/mission-utils";

class OutputView {
  static printError(message) {
    Console.print(message + "\n");
  }

  static printPurchaseInfo(lottoCount, lottos) {
    Console.print(`${lottoCount}개를 구매했습니다.`);

    lottos.forEach((lotto) => {
      Console.print(lotto.getNumbers());
    });
  }
}

export default OutputView;
