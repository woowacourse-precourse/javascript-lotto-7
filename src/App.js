import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    const amount = await this.#readAmount();
    const lottoCount = Math.floor(amount / 1000);
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    this.#generateLottoNumbers(lottoCount);
  }

  #generateLottoNumbers(count) {
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    }
  }

  async #readAmount() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return Number(input);
  }
}

export default App;
