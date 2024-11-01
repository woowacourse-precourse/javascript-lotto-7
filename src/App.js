import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const Count = await this.getMoney() / 1000;
    const Lotto = await this.getLottos(Count);
    const CorrectArray = await this.getCorrectNumbers();
    const BonusNumber = await this.getBonusNumber(CorrectArray);
    for (let i = 0; i < Count; i++) {
      console.log(`${this.checkCorrect(Lotto[i], CorrectArray)}개 맞춤\n`);
    }
    
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

  checkCorrect(lotto, correct) {
    const setLotto = new Set(lotto);
    const setCorrect = new Set(correct);
    let count = 0;
    setLotto.forEach(value => {
      if (setCorrect.has(value)) {
        count++;
      }
    });
    return count;
  }

  hasUniqueElements(array) {
    const uniqueElements = new Set(array);
    return uniqueElements.size === array.length;
  }
}

export default App;
