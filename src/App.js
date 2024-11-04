import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    const moneyPaid = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const numberOfLotto = moneyPaid / 1000;
    //[ERROR] 1천원 단위인지 검증 요구됨
    MissionUtils.Console.print(`${numberOfLotto}개를 구매했습니다.\n`);

    const lottoes = [];

    for (let i = 0; i < numberOfLotto; i++) {
      let numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers.sort((a, b) => a - b));
      lottoes.push(lotto);
      const printLotto = lotto.getNumbers().join(", ");
      MissionUtils.Console.print(`[${printLotto}]`);
    }

    const inputWinningNumbers = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const winningNumbers = inputWinningNumbers.split(",").map(Number).sort((a, b) => a - b);
    //[ERROR] 당첨 번호 유효성 평가 요구됨

    const inputBonusNumber = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    const bonusNumber = Number(inputBonusNumber);
    //[ERROR] 보너스 번호 유효성 평가 요구됨
    let matches = [0, 0, 0, 0, 0, 0, 0];
    let fiveMatchWithBonus = 0;

    // 당첨 번호와 대조하기
    for (let i = 0; i < numberOfLotto; i++) {
      const arr = lottoes[i].getNumbers();
      let intersection = winningNumbers.filter(x => arr.includes(x));
      matches[intersection.length] += 1;

      if (intersection.length === 5) {
        if (lottoes[i].getNumbers().includes(bonusNumber)) {
          fiveMatchWithBonus += 1;
        }
      }
    }
    // 출력
    MissionUtils.Console.print("당첨 통계\n---\n");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${matches[3]}`)
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${matches[4]}`)
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${matches[5] - fiveMatchWithBonus}`)
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${fiveMatchWithBonus}`)
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${matches[6]}`)

    //수익률
    let total = 5000 * matches[3] + 50000 * matches[4] + 1500000 * (matches[5] - fiveMatchWithBonus) + 30000000 * fiveMatchWithBonus + matches[6] * 2000000000
    let rateOfReturn = Math.round(total / moneyPaid * 100) / 100
    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}

export default App;
