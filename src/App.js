import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const amount = await this.#readAmount();
    const lottoCount = Math.floor(amount / 1000);
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
  }

  async #readAmount() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return Number(input);
  }
}
export default App;
