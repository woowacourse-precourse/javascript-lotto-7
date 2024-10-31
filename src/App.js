import { Console } from "@woowacourse/mission-utils";
import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto"; // Lotto 클래스 임포트

class App {
  async run() {
    // 로또 구입 금액 입력
    const lottoPrice = parseInt(
      await Console.readLineAsync("얼마치 로또를 구입하시겠습니까?"),
      10
    );
    const lottoCount = Math.floor(lottoPrice / 1000);

    Console.print(`${lottoCount}개를 구매했습니다.`);

    // 로또 번호 생성 및 오름차순 정렬 후 출력
    const lottoList = [];
    for (let i = 0; i < lottoCount; i++) {
      const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      ).sort((a, b) => a - b);
      lottoList.push(randomNumbers);
      Console.print(`[${randomNumbers.join(", ")}]`);
    }

    // 당첨 번호 및 보너스 번호 입력 처리
    const lottoNum = await Console.readLineAsync("당첨 번호를 입력 하세요.");
    const lottoNumbers = lottoNum.split(",").map(Number);
    const lotto = new Lotto(lottoNumbers);

    const bonusNumber = Lotto.genBonusNum(lotto.getNum());

    // 로직 실행
    Console.print(`구입 금액: ${lottoPrice}`);
    Console.print(`당첨 번호: ${lotto.getNum()}`);
    Console.print(`보너스 번호: ${bonusNumber}`);
  }
}

export default App;
