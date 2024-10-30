import { Console } from "@woowacourse/mission-utils";

class GameOutput {
  printNewLotto(new_lotto) {
    Console.print(`\n${new_lotto.length}개를 구매했습니다.`);
    new_lotto.forEach((lotto) => {
      Console.print(lotto);
    });
  }

  printErrorMesssage(error) {
    Console.print(error.message);
  }
}

export default GameOutput;
