import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  checkNumber(input) {
    //숫자가 아닌 경우 |
    if (isNaN(input) || parseInt(input) != input) {
      throw new Error("[ERROR] 숫자를 입력하세요.");
    }
  }

  CalculateLottoCount(input) {
    if (input % 1000 !== 0) {
      throw new Error("[ERROR] 구입은 1,000원 단위로 입력하세요.");
    }

    return input / 1000;
  }
  RandomLotto() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers.sort((a, b) => a - b);
  }
  BonusNumber(Numbers) {
    let bonusNumber;
    let isUnique = false;
    while (!isUnique) {
      bonusNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 1);

      if (!Numbers.includes(bonusNumber)) {
        isUnique = true;
      }
    }

    return bonusNumber;
  }
  async run() {
    try {
      const moneyInput =
        await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.");
      this.checkNumber(moneyInput);
      const lottoCount = this.CalculateLottoCount(moneyInput);
      MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);

      const lotto = new Lotto();
      lotto.display();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      // 에러 발생시 재입력받게 해줌
      await this.run();
    }
  }
}

export default App;
