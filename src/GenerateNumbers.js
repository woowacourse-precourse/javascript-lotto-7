import { MissionUtils } from "@woowacourse/mission-utils";

class GenerateNumbers {
  async generateNums(bills, numbers, bonusNum) {
    const allGeneratedNumbers = [];

    for (let i = 0; i < bills; i++) {
      const randomNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      randomNum.sort((a, b) => a - b);
      allGeneratedNumbers.push(randomNum);

      this.findMatchingNumber(randomNum, numbers, bonusNum);
    }
    console.log("");

    return allGeneratedNumbers;
  }

  findMatchingNumber(randomNum, numbers, bonusNum) {
    console.log("");
    const matchingNumbers = randomNum.filter((num) => numbers.includes(num));
    const count = matchingNumbers.length;

    console.log("당첨 번호:", numbers);
    console.log("보너스 번호:", bonusNum);

    console.log("비교할 랜덤 번호:", randomNum);

    const bonusNumAsNumber = Number(bonusNum);

    if (count === 1) {
      if (randomNum.includes(bonusNumAsNumber)) {
        console.log(count + "개 번호와 보너스 번호 일치");
      } else {
        console.log(count + "개 번호 일치");
      }
      return;
    }

    if (count === 2) {
      console.log(count + "개 번호 일치");
      return;
    }

    console.log("일치하는 번호 없음");
  }
}

export default GenerateNumbers;
