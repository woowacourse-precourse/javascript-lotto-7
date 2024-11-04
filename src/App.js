import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const count = await this.getMoney() / 1000;
      const lottos = await this.getLottos(count);
      const correctArray = await this.getCorrectNumbers();
      const bonusNumber = await this.getBonusNumber(correctArray);
      const correctCount = this.checkCountCorrect(count, lottos, correctArray, bonusNumber);
      this.winningResult(correctCount);
      MissionUtils.Console.print(`총 수익률은 ${this.calculateBenefit(correctCount, count)}%입니다.`);
    } catch (error) {
      MissionUtils.Console.print("[ERROR] " + error.message);
    }
  }

  async getMoney() {
    while (true) {
      try {
        const input = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
        const money = Number(input);
        console.log(money);
        if (isNaN(money)) {
          throw new Error("구매 금액은 숫자로 입력해 주세요.");
        }
        if (money % 1000 !== 0) {
          throw new Error("구매 금액은 1000원 단위이어야 합니다.");
        }
        return money;
      } catch (error) {
        MissionUtils.Console.print("[ERROR] " + error.message);
      }
    }
  }

  async getLottos(count) {
    MissionUtils.Console.print(`${count}개를 구매했습니다.`);
    const lottoArray = Array.from({ length: count }, () => {
      const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      return randomNumbers.sort((a, b) => a - b);
    });
    for (let i = 0; i < count; i++) {
      MissionUtils.Console.print(`[${lottoArray[i].join(", ")}]`);
    }
    return lottoArray;
  }

  async getCorrectNumbers() {
    while (true) {
      try {
        const input = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
        const numberArray = input.split(",").map(Number);
        if (numberArray.some(num => isNaN(num))) {
          throw new Error("당첨 번호는 숫자로 입력해 주세요.");
        }
        if (numberArray.some(num => num > 45 || num < 1)) {
          throw new Error("당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
        }
        if (numberArray.length !== 6 || new Set(numberArray).size !== numberArray.length) {
          throw new Error("당첨 번호는 중복되지 않는 6개의 숫자여야 합니다.");
        }
        return numberArray;
      } catch (error) {
        MissionUtils.Console.print("[ERROR] " + error.message);
      }
    }
  }

  async getBonusNumber(numberArray) {
    while (true) {
      try {
        const input = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
        const bonusNumber = Number(input);
        if (isNaN(bonusNumber)) {
          throw new Error("보너스 번호는 숫자로 입력해 주세요.");
        }
        if (bonusNumber > 45 || bonusNumber < 1) {
          throw new Error("보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
        }
        if (numberArray.includes(bonusNumber)) {
          throw new Error("보너스 번호는 당첨 번호와 중복되지 않아야 합니다.");
        }
        return bonusNumber;
      } catch (error) {
        MissionUtils.Console.print("[ERROR] " + error.message);
      }
    }
  }

  checkCorrect(lotto, correct, bonus) {
    const setLotto = new Set(lotto);
    const setCorrect = new Set(correct);
    let count = 0;
    setLotto.forEach(value => {
      if (setCorrect.has(value)) {
        count++;
      }
    });
    if (count === 5 && setLotto.has(bonus)) {
      count += 2;
    }
    return count;
  }

  checkCountCorrect(count, lottos, correctArray, bonusNumber) {
    return lottos.map(lotto => this.checkCorrect(lotto, correctArray, bonusNumber));
  }

  countSpecificElement(correctCount, target) {
    return correctCount.filter(element => element === target).length;
  }

  winningResult(correctCount) {
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${this.countSpecificElement(correctCount, 3)}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${this.countSpecificElement(correctCount, 4)}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${this.countSpecificElement(correctCount, 5)}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.countSpecificElement(correctCount, 7)}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${this.countSpecificElement(correctCount, 6)}개`);
  }

  calculateBenefit(correctCount, count) {
    const totalPrize = this.countSpecificElement(correctCount, 3) * 5000 +
      this.countSpecificElement(correctCount, 4) * 50000 +
      this.countSpecificElement(correctCount, 5) * 1500000 +
      this.countSpecificElement(correctCount, 7) * 30000000 +
      this.countSpecificElement(correctCount, 6) * 2000000000;
    return (totalPrize / (count * 1000)) * 100;
  }
}

export default App;
