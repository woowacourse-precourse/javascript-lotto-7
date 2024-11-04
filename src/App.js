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
      6
    );

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
        등수 = 2;
      case 5:
        등수 = 3;
        break;
      case 4:
        등수 = 4;
        break;
      case 3:
        등수 = 5;
        break;
    }
  }
}

export default App;
