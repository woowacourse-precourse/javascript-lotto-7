import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    const purchasePrice = await Console.readLineAsync("구입금액을 입력해 주세요.\n");

    if (purchasePrice % 1000 !== 0) {
      throw new Error("[ERROR] 1,000원 단위로 나누어 떨어지지 않습니다.")
    }

    const lottoCount = purchasePrice / 1000;
    Console.print(`\n${lottoCount}개를 구매했습니다.`)

    const lottoArr = [];

    for (let i = 0; i < lottoCount; i++) {
      const randomNums = Random.pickUniqueNumbersInRange(1, 45, 6)
      lottoArr.push(randomNums);
    }
  }
}

export default App;
