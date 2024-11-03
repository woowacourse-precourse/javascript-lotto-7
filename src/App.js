import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    const money = await Console.readLineAsync("구입금액을 입력해 주세요.");
    if (money % 1000 !== 0)
      throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
    const lottoCount = parseInt(money / 1000);
    Console.print(`${lottoCount}개를 구매했습니다.`);
  }
}

export default App;
