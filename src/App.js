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

    const sortedLottoArr = lottoArr.map(nums => nums.map(Number).sort((a, b) => a - b));

    sortedLottoArr.forEach(arr => {
        Console.print(arr);
    });

    const winningNumbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const bonusNumber = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");

    const matchCounts = lottoArr.map(lottoNumbers => {
      // 당첨 번호와 비교하여 일치하는 번호 필터링
      const matchedNumbers = lottoNumbers.filter(num => winningNumbers.includes(num));
      return matchedNumbers.length; // 일치하는 번호의 개수 반환
    });

    Console.print(`당첨 통계\n---\n${matchCounts}개 일치 (${})`)
    }
}

export default App;
