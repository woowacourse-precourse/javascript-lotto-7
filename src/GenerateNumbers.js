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
      const randomNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      randomNum.sort((a, b) => a - b);
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

  findMatchingNumber(randomNum, numbers, bonusNum, bills) {
    console.log("");
    const matchingNumbers = randomNum.filter((num) => numbers.includes(num));
    const count = matchingNumbers.length;

    // console.log("당첨 번호:", numbers);
    // console.log("보너스 번호:", bonusNum);

    // console.log("비교할 랜덤 번호:", randomNum);

    let prizeMoney = 0;

    const bonusNumAsNumber = Number(bonusNum);

    if (count === 0 || count === 1 || count === 2) {
      // console.log("일치하는 번호 없음");
    }

    if (count === 3) {
      prizeMoney = 5000;
      this.fifthPlaceCount++;
      // console.log(count + "개 번호 일치");
    }

    if (count === 4) {
      prizeMoney = 50000;
      this.fourthPlaceCount++;
      // console.log(count + "개 번호 일치");
    }

    if (count === 5) {
      if (randomNum.includes(bonusNumAsNumber)) {
        prizeMoney = 1500000;
        this.secondPlaceCount++;
        // console.log(count + "개 번호와 보너스 번호 일치");
      } else {
        prizeMoney = 30000000;
        this.thirdPlaceCount++;
        // console.log(count + "개 번호 일치");
      }
    }

    if (count === 6) {
      prizeMoney = 2000000000;
      this.firstPlaceCount++;
      // console.log(count + "개 번호 일치");
    }

    this.totalPrizeMoney += prizeMoney;
    // console.log("상금 : " + prizeMoney);
  }

  calculateReturn(bills) {
    const totalPrice = bills * 1000;
    const profit = (this.totalPrizeMoney / totalPrice) * 100;
    // console.log(this.totalPrizeMoney);
    // console.log(totalPrice);
    return profit;
  }
}

export default GenerateNumbers;
