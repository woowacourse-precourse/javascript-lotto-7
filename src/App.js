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
    let lottoCount = this.getLottoNumbers(count);
    Console.print(lottoCount);

    let winningNumbers = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );

    winningNumbers = winningNumbers.split(",").map((num) => parseInt(num));

    let bonusNumber = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );

    bonusNumber = Number(bonusNumber);

    let comparedList = this.compareNumbers(
      lottoCount,
      winningNumbers,
      bonusNumber
    );

    let result = this.getResult(comparedList);

    Console.print(result);
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
      let hasBonus = false;
      for (let j = 0; j < lottoNumbers[i].length; j++) {
        if (winningNumbers.includes(lottoNumbers[i][j])) {
          count++;
        }
        if (lottoNumbers[i][j] === bonusNumber) {
          hasBonus = true;
        }
      }

      result.push(count === 4 && hasBonus ? "5(bonus)" : count);
    }
    return result;
  }

  getResult(comparedList) {
    const result = {
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      "5(bonus)": 0,
    };

    comparedList.forEach((item) => {
      if (result[item] !== undefined) {
        result[item]++;
      }
    });

    // return result;
    return `3개 일치 (5,000원) - ${result[3]}개 \n
    4개 일치 (50,000원) - ${result[4]}개 \n 
    5개 일치 (1,500,000원) - ${result[5]}개 \n
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${result["5(bonus)"]}개 \n
    6개 일치 (2,000,000,000원) - ${result[6]}개`;
  }
}

export default App;
