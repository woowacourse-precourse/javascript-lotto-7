import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    MissionUtils.Console.print("로또에 얼마 쓸건가요?");
    this.inputMoney = await MissionUtils.Console.readLineAsync("");
    this.로또번호몇번출력할건지();
    MissionUtils.Console.print("당첨번호를 입력해주세요");
    this.당첨번호 = await MissionUtils.Console.readLineAsync("");
    MissionUtils.Console.print("보너스 번호를 입력해주세요");
    this.보너스번호 = await MissionUtils.Console.readLineAsync("");
  }
  lottoNumberprint() {
    const randomNumberList = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      45,
      7
    );
    const bonusNumber = randomNumberList[-1];
    bonusNumber.pop();
    randomNumberList.sort((a, b) => a - b);
    MissionUtils.Console.print(randomNumberList);
  }
  로또번호몇번출력할건지() {
    const 로또번호출력횟수 = parseInt(this.inputMoney) / 1000;
    for (let i = 0; i < 로또번호출력횟수; i++) {
      this.lottoNumberprint();
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
  당첨통계출력() {
    MissionUtils.Console.print(`
      ---
      3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
      `);
  }
}

export default App;
