import { Console } from "@woowacourse/mission-utils";

class Print {
  constructor() {}

  static lottos(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.\n`);

    for (const lotto of lottos) {
      Console.print(
        `[${lotto
          .getNumbers()
          .sort((a, b) => a - b)
          .join(", ")}]`
      );
    }
  }
}

export default Print;
