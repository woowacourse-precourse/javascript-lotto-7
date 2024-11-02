import { Console } from "@woowacourse/mission-utils";

class Output {
  #lottoCnt;
  #lottos;

  constructor(money, lottos) {
    this.#lottoCnt = money / 1000;
    this.#lottos = lottos;
  }

  lottos() {
    Console.print(`\n${this.#lottoCnt}개를 구매했습니다.\n`);

    for (let lotto of this.#lottos) {
      Console.print(
        `[${lotto
          .getNumbers()
          .sort((a, b) => a - b)
          .join(", ")}]`
      );
    }
  }
}

export default Output;
