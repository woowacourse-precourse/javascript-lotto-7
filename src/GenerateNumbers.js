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
    const count = this.countMatchingNumbers(randomNum, numbers);
    const isBonusMatched = this.isBonusMatched(randomNum, bonusNum);
    this.countCalculate(count, isBonusMatched);
  }

  countMatchingNumbers(randomNum, numbers) {
    return randomNum.filter((num) => numbers.includes(num)).length;
  }

  isBonusMatched(randomNum, bonusNum) {
    return randomNum.includes(Number(bonusNum));
  }

  countCalculate(count, isBonusMatched) {
    if (count === 3) {
      this.fifthPlaceCount++;
    } else if (count === 4) {
      this.fourthPlaceCount++;
    } else if (count === 5) {
      this.handleBonusMatches(isBonusMatched);
    } else if (count === 6) {
      this.firstPlaceCount++;
    }
  }

  handleBonusMatches(isBonusMatched) {
    if (isBonusMatched) {
      this.secondPlaceCount++;
      return;
    }
    this.thirdPlaceCount++;
  }

  calculateReturn(bills) {
    const totalPrizeMoney = this.calculateTotalPrizeMoney();
    const totalPrice = bills * 1000;
    const profit = (totalPrizeMoney / totalPrice) * 100;
    return profit;
  }

  calculateTotalPrizeMoney() {
    return (
      this.fifthPlaceCount * 5000 +
      this.fourthPlaceCount * 50000 +
      this.thirdPlaceCount * 1500000 +
      this.secondPlaceCount * 30000000 +
      this.firstPlaceCount * 2000000000
    );
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
