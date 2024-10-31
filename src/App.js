import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    let price = await Console.readLineAsync("구입금액을 입력해 주세요.\n");

    if (price < 1000) {
      Console.print("[ERROR] 1000원 이상의 금액을 입력해 주세요.");
      return;
    }

    let count = Math.floor(price / 1000);

    Console.print(`${count}개를 구매했습니다.`);
    let lottoNumbers = this.getLottoNumbers(count);
    Console.print(lottoNumbers);

    let winningNumbers = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );

    let bonusNumber = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );

    let result = this.compareNumbers(lottoNumbers, winningNumbers, bonusNumber);
  }

  getLottoNumbers(num) {
    let lottoNumbers = [];
    for (let i = 0; i < num; i++) {
      let numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNumbers.push(numbers);
    }
    return lottoNumbers;
  }

  compareNumbers(lottoNumbers, winningNumbers, bonusNumber) {
    let result = [];
    for (let i = 0; i < lottoNumbers.length; i++) {
      let count = 0;
      for (let j = 0; j < lottoNumbers[i].length; j++) {
        if (winningNumbers.includes(lottoNumbers[i][j])) {
          count++;
        }
      }
      result.push(count);
    }
  }
}

export default App;
