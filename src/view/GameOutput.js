import { Console } from "@woowacourse/mission-utils";

class GameOutput {
  printPurchaseLotto(purchase_lotto) {
    Console.print(`\n${purchase_lotto}개를 구매했습니다.`);
  }

  printErrorMesssage(error) {
    Console.print(error.message);
  }
}

export default GameOutput;
