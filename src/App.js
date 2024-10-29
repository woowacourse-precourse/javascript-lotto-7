import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const money = await this.getMoney();
    await this.getCorrectNumbers();
    await this.getLottos(money);
  }

  async getMoney() {
    const input = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
    if (input % 1000 !== 0) {
      throw new Error("[ERROR] 구매 금액은 1000원 단위이어야 합니다.");
    }
    return input;
  }

  async getLottos(money) {
    const count = money / 1000;
    MissionUtils.Console.print(`${count}개를 구매했습니다.`);
    const lottoArray = Array.from({length: count}, () => {
      const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      return randomNumbers.sort((a, b) => a - b);
    });
    return lottoArray;
  }

  async getCorrectNumbers() {
    const input = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const numberArray = input.split(",").map(Number);
    if (numberArray.some(num => num > 45 || num < 1)) {
      throw new Error("[ERROR] 잘못된 숫자 입력.");
    }
    return numberArray;
  }

  async getBonusNumber() {
    const input = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    if (input > 45 || input < 0) {
      throw new Error("[ERROR] 잘못된 숫자 입력.");
    }
    return input;
  }
}

export default App;
