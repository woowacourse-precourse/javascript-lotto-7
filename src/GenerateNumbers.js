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

      this.findMatchingNumber(randomNum, numbers, bonusNum);
    }
    console.log("");

    console.log("2개 일치 (100원) - " + this.firstPlaceCount + "개");
    console.log(
      "1개 일치, 보너스 볼 일치 (10원) - " + this.secondPlaceCount + "개"
    );
    console.log("1개 일치 (1원) - " + this.thirdPlaceCount + "개");

    // console.log("1등 횟수 : " + this.firstPlaceCount);
    // console.log("2등 횟수 : " + this.secondPlaceCount);
    // console.log("3등 횟수 : " + this.thirdPlaceCount);
    // console.log("4등 횟수 : " + this.fourthPlaceCount);
    // console.log("5등 횟수 : " + this.fifthPlaceCount);
    console.log("");
    console.log("총상금 : " + this.totalPrizeMoney);
    return allGeneratedNumbers;
  }

  findMatchingNumber(randomNum, numbers, bonusNum) {
    console.log("");
    const matchingNumbers = randomNum.filter((num) => numbers.includes(num));
    const count = matchingNumbers.length;

    console.log("당첨 번호:", numbers);
    console.log("보너스 번호:", bonusNum);

    console.log("비교할 랜덤 번호:", randomNum);

    let prizeMoney = 0;

    const bonusNumAsNumber = Number(bonusNum);

    if (count === 0) {
      console.log("일치하는 번호 없음");
    }

    // 테스트를 위한 임시 코드, 비교할 count 값은 추후 수정
    if (count === 1) {
      if (randomNum.includes(bonusNumAsNumber)) {
        prizeMoney = 1;
        this.secondPlaceCount++;
        console.log("2등");
        console.log(count + "개 번호와 보너스 번호 일치");
      } else {
        prizeMoney = 10;
        this.thirdPlaceCount++;
        console.log("3등");
        console.log(count + "개 번호 일치");
      }
    }

    if (count === 2) {
      prizeMoney = 100;
      this.firstPlaceCount++;
      console.log("1등");
      console.log(count + "개 번호 일치");
    }

    this.totalPrizeMoney += prizeMoney;
    console.log("상금 : " + prizeMoney);
  }
}

export default GenerateNumbers;
