import { MissionUtils } from "@woowacourse/mission-utils";

class GenerateNumbers {
  constructor() {
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

      this.findMatchingNumber(randomNum, numbers, bonusNum);
    }
    console.log("");

    this.printPrizeResult();

    console.log("");
    const profit = this.calculateReturn(bills);
    return { generatedList: allGeneratedNumbers, profit };
  }

  generateSingleSet() {
    const randomNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    randomNum.sort((a, b) => a - b);
    return randomNum;
  }

  findMatchingNumber(randomNum, numbers, bonusNum) {
    console.log("");
    const matchingNumbers = randomNum.filter((num) => numbers.includes(num));
    const count = matchingNumbers.length;

    const isBonusMatched = this.isBonusMatched(randomNum, bonusNum);
    this.countCalculate(count, isBonusMatched);
  }

  isBonusMatched(randomNum, bonusNum) {
    return randomNum.includes(Number(bonusNum));
  }

  countCalculate(count, isBonusMatched) {
    if (count === 3) {
      this.fifthPlaceCount++;
    }

    if (count === 4) {
      this.fourthPlaceCount++;
    }

    if (count === 5) {
      if (isBonusMatched) {
        this.secondPlaceCount++;
      } else {
        this.thirdPlaceCount++;
      }
    }

    if (count === 6) {
      this.firstPlaceCount++;
    }
  }

  calculateReturn(bills) {
    const totalPrice = bills * 1000;
    const total =
      this.fifthPlaceCount * 5000 +
      this.fourthPlaceCount * 50000 +
      this.thirdPlaceCount * 1500000 +
      this.secondPlaceCount * 30000000 +
      this.firstPlaceCount * 2000000000;

    const profit = (total / totalPrice) * 100;
    return profit;
  }

  printPrizeResult() {
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
  }
}

export default GenerateNumbers;
