import { Console, Random } from "@woowacourse/mission-utils";

class App {
  #validatePurchaseAmount(amount) {
    if (amount < 1000) {
      throw new Error("[ERROR] 구입 금액은 최소 1,000원 이상이어야 합니다.");
    }
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
    }
  }

  async run() {

    const purchasePrice = Number(await Console.readLineAsync("구입금액을 입력해 주세요.\n"));
    this.#validatePurchaseAmount(purchasePrice);

    const lottoCount = purchasePrice / 1000;
    Console.print(`\n${lottoCount}개를 구매했습니다.`)

    const lottoArr = [];

    for (let i = 0; i < lottoCount; i++) {
      const randomNums = Random.pickUniqueNumbersInRange(1, 45, 6)
      lottoArr.push(randomNums);
    }

    const sortedLottoArr = lottoArr.map(nums => nums.map(Number).sort((a, b) => a - b));

    sortedLottoArr.forEach(arr => {
      Console.print(`[${arr.join(', ')}]`); // 배열을 대괄호로 감싸서 출력
    });

    const winningNumbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const bonusNumber = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
  }
}
export default App;
