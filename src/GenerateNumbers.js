import { MissionUtils } from "@woowacourse/mission-utils";

class GenerateNumbers {
  async generateNums(bills) {
    for (let i = 0; i < bills; i++) {
      const randomNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      randomNum.sort((a, b) => a - b);
      console.log(randomNum);
    }
  }
}

export default GenerateNumbers;
