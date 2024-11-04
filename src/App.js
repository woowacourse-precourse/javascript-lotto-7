import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    MissionUtils.Console.print("구입금액을 입력해 주세요.");
    this.inputMoney = await MissionUtils.Console.readLineAsync("");
    this.로또번호출력횟수 = parseInt(this.inputMoney) / 1000;
    MissionUtils.Console.print(`${this.로또번호출력횟수}개를 구매했습니다.`);
    this.전체로또번호리스트 = [];
    this.전체로또번호만들기();

    MissionUtils.Console.print("당첨번호를 입력해주세요");
    this.당첨번호 = await MissionUtils.Console.readLineAsync("");
    MissionUtils.Console.print("보너스 번호를 입력해주세요");
    this.보너스번호 = await MissionUtils.Console.readLineAsync("");
  }
  lottoNumber() {
    const randomNumberList = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      45,
      7
    );
    // 특정함수 bonusNumber를 클래스의 속성으로 써도 되나?
    this.bonusNumber = randomNumberList[-1];
    randomNumberList.pop();
    randomNumberList.sort((a, b) => a - b);
    return randomNumberList;
  }

  전체로또번호만들기() {
    for (let i = 0; i < this.로또번호출력횟수; i++) {
      this.전체로또번호리스트.push(this.lottoNumber());
    }
  }
  랜덤로또번호와당첨번호비교(로또번호) {
    let 일치갯수 = 0;
    로또번호.forEach((num) => {
      if (this.당첨번호.includes(num)) {
        일치갯수++;
      }
    });
    return 일치갯수;
  }
  등수선정() {
    let 등수;
    switch (일치개수) {
      case 6:
        등수 = 1;
        break;
      case 5:
        if (bonusNumber === this.보너스번호) {
          등수 = 2;
        } else {
          등수 = 3;
        }
        break;
      case 4:
        등수 = 4;
        break;
      case 3:
        등수 = 5;
        break;
    }
  }
  등수인덱스리스트만들기() {
    const 등수인덱스리스트 = [0, 0, 0, 0, 0];
    for (let i = 0; i < 로또번호출력횟수; i++) {
      if (등수 === 1) {
        등수인덱스리스트[4] += 1;
      } else if (등수 === 2) {
        등수인덱스리스트[3] += 1;
      } else if (등수 === 3) {
        등수인덱스리스트[2] += 1;
      } else if (등수 === 4) {
        등수인덱스리스트[1] += 1;
      } else if (등수 === 5) {
        등수인덱스리스트[0] += 1;
      }
    }
    return 등수인덱스리스트;
  }
  당첨통계출력(등수인덱스리스트) {
    MissionUtils.Console.print(`
      당첨통계
      ---
      3개 일치 (5,000원) - ${등수인덱스리스트[0]}개
      4개 일치 (50,000원) - ${등수인덱스리스트[1]}개
      5개 일치 (1,500,000원) - ${등수인덱스리스트[2]}개
      5개 일치, 보너스 볼 일치 (30,000,000원) - ${등수인덱스리스트[3]}개
      6개 일치 (2,000,000,000원) - ${등수인덱스리스트[4]}개
      `);
  }
  총액산출(등수인덱스리스트) {
    const 총액 =
      5000 * 등수인덱스리스트[0] +
      50000 * 등수인덱스리스트[1] +
      1500000 * 등수인덱스리스트[2] +
      30000000 * 등수인덱스리스트[3] +
      2000000000 * 등수인덱스리스트[4];
    return 총액;
  }
  수익률출력(총액) {
    const 수익률 =
      Math.round((parseInt(총액) / this.inputMoney) * 100 * 10) / 10;
    MissionUtils.Console.print(`총 수익률은 ${수익률}%입니다.`);
  }
}

export default App;
