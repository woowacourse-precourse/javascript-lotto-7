import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    MissionUtils.Console.print("로또에 얼마 쓸건가요?");
    this.inputMoney = await MissionUtils.Console.readLineAsync("");
    this.로또번호몇번출력할건지();
    MissionUtils.Console.print("당첨번호를 입력해주세요");
    const 당첨번호 = await MissionUtils.Console.readLineAsync("");
    MissionUtils.Console.print("보너스 번호를 입력해주세요");
    const 보너스번호 = await MissionUtils.Console.readLineAsync("");
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
}

export default App;
