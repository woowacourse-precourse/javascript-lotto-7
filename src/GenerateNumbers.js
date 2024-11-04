import { MissionUtils } from "@woowacourse/mission-utils";

class GenerateNumbers {
  constructor() {
    this.totalPrizeMoney = 0;
    this.firstPlaceCount = 0;
    this.secondPlaceCount = 0;
    this.thirdPlaceCount = 0;
    this.fourthPlaceCount = 0;
    this.fifthPlaceCount = 0;
  }

  async generateNums(bills, numbers, bonusNum) {
    const allGeneratedNumbers = [];

    for (let i = 0; i < bills; i++) {
      const randomNum = this.generateSingleSet();
      allGeneratedNumbers.push(randomNum);

      this.findMatchingNumber(randomNum, numbers, bonusNum, bills);
    }
    console.log("");

    MissionUtils.Console.print(
      "3개 일치 (5,000원) - " + this.fifthPlaceCount + "개"
    );
    MissionUtils.Console.print(
      "4개 일치 (50,000원) - " + this.fourthPlaceCount + "개"
    );
    MissionUtils.Console.print(
      "5개 일치 (1,500,000원) - " + this.thirdPlaceCount + "개"
    );
    MissionUtils.Console.print(
      "5개 일치, 보너스 볼 일치 (30,000,000원) - " +
        this.secondPlaceCount +
        "개"
    );
    MissionUtils.Console.print(
      "6개 일치 (2,000,000,000원) - " + this.firstPlaceCount + "개"
    );
    console.log("");
    const profit = this.calculateReturn(bills);
    return { generatedList: allGeneratedNumbers, profit };
  }

  generateSingleSet() {
    const randomNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    randomNum.sort((a, b) => a - b);
    return randomNum;
  }

  findMatchingNumber(randomNum, numbers, bonusNum, bills) {
    console.log("");
    const matchingNumbers = randomNum.filter((num) => numbers.includes(num));
    const count = matchingNumbers.length;

    let prizeMoney = 0;

    const isBonusMatched = this.isBonusMatched(randomNum, bonusNum);

    if (count === 0 || count === 1 || count === 2) {
    }

    if (count === 3) {
      prizeMoney = 5000;
      this.fifthPlaceCount++;
    }

    if (count === 4) {
      prizeMoney = 50000;
      this.fourthPlaceCount++;
    }

    if (count === 5) {
      if (isBonusMatched) {
        prizeMoney = 1500000;
        this.secondPlaceCount++;
      } else {
        prizeMoney = 30000000;
        this.thirdPlaceCount++;
      }
    }

    if (count === 6) {
      prizeMoney = 2000000000;
      this.firstPlaceCount++;
    }

    this.totalPrizeMoney += prizeMoney;
  }

  isBonusMatched(randomNum, bonusNum) {
    return randomNum.includes(Number(bonusNum));
  }

  calculateReturn(bills) {
    const totalPrice = bills * 1000;
    const profit = (this.totalPrizeMoney / totalPrice) * 100;
    return profit;
  }
}

export default GenerateNumbers;
