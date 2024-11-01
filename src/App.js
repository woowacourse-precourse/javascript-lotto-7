import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const Count = await this.getMoney() / 1000;
    const Lotto = await this.getLottos(Count);
    const CorrectArray = await this.getCorrectNumbers();
    const BonusNumber = await this.getBonusNumber(CorrectArray);
    const CorrectCount = this.checkCountCorrect(Count, Lotto, CorrectArray, BonusNumber);
    this.winningResult(CorrectCount);
    MissionUtils.Console.print(`총 수익률은 ${this.calculateBenefit(CorrectCount, Count)}%입니다.`);
  }

  async getMoney() {
    const input = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
    if (input % 1000 !== 0) {
      throw new Error("[ERROR] 구매 금액은 1000원 단위이어야 합니다.");
    }
    return input;
  }

  async getLottos(count) {
    MissionUtils.Console.print(`${count}개를 구매했습니다.`);
    const lottoArray = Array.from({length: count}, () => {
      const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      return randomNumbers.sort((a, b) => a - b);
    });
    for (let i = 0; i < count; i++) {
      MissionUtils.Console.print(lottoArray[i]);
    }
    return lottoArray;
  }

  async getCorrectNumbers() {
    const input = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const numberArray = input.split(",").map(Number);
    if (numberArray.some(num => isNaN(num))) {
      throw new Error("[ERROR] 숫자를 입력해 주세요.");
    }
    if (numberArray.some(num => num > 45 || num < 1)) {
      throw new Error("[ERROR] 잘못된 숫자 입력.");
    }
    if (this.hasUniqueElements(numberArray) == false) {
      throw new Error("[ERROR] 중복된 값을 입력했습니다.");
    }
    if (numberArray.length !== 6) {
      throw new Error("[ERROR] 숫자의 갯수가 안맞습니다.");
    }
    return numberArray;
  }

  async getBonusNumber(numberArray) {
    const input = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    const bonusNumber = Number(input);
    // const bonusNumber = input;
    if (isNaN(bonusNumber)) {
        throw new Error("[ERROR] 숫자를 입력해 주세요.");
    }
    if (bonusNumber > 45 || bonusNumber < 0) {
      throw new Error("[ERROR] 잘못된 숫자 입력.");
    }
    else if (numberArray.includes(bonusNumber)) {
      throw new Error("[ERROR] 이미 존재하는 숫자입니다.");
    }
    return bonusNumber;
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
    if (count == 5) {
      setLotto.forEach(value => {
        if (bonus == value) {
          count += 2;
        }
      });
    }
    return count;
  }

  checkCountCorrect(Count, Lotto, CorrectArray, BonusNumber) {
    const array = [];
    for (let i = 0; i < Count; i++) {
      array.push(this.checkCorrect(Lotto[i], CorrectArray, BonusNumber))
    }
    return array;
  }

  hasUniqueElements(array) {
    const uniqueElements = new Set(array);
    return uniqueElements.size === array.length;
  }

  countSpecificElement(CorrectCount, target) {
    return CorrectCount.filter(element => element === target).length;
  }
  
  winningResult(CorrectCount) {
    MissionUtils.Console.print("당첨 통계\n---");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${this.countSpecificElement(CorrectCount, 3)}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${this.countSpecificElement(CorrectCount, 4)}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${this.countSpecificElement(CorrectCount, 5)}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.countSpecificElement(CorrectCount, 7)}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${this.countSpecificElement(CorrectCount, 6)}개`);
  }

  calculateBenefit(CorrectCount, Count) {
    return ((this.countSpecificElement(CorrectCount, 3) * 5000 + this.countSpecificElement(CorrectCount, 4) * 50000 + this.countSpecificElement(CorrectCount, 5) * 1500000
    + this.countSpecificElement(CorrectCount, 7) * 30000000 + this.countSpecificElement(CorrectCount, 6) * 2000000000) / Count / 10);
  }
  
  
}

export default App;
