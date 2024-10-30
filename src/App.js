import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto"; // Lotto 클래스 임포트

class App {
  async run() {
    // 로또 구입 금액 입력
    const lottoPrice = await Console.readLineAsync(
      "얼마치 로또를 구입하시겠습니까?"
    );

    const lottoNum = await Console.readLineAsync("당첨 번호를 입력 하세요.");
    const lottoNumbers = lottoNum.split(",").map(Number); // 입력받은 당첨 번호를 배열로 변환

    // Lotto 인스턴스 생성 및 번호 검증
    const lotto = new Lotto(lottoNumbers); // 사용자가 입력한 번호를 전달

    // 보너스 번호 생성
    const bonusNumber = Lotto.genBonusNum(lotto.getNumbers()); // Lotto 클래스에서 생성된 보너스 번호 가져오기

    // 로직 실행
    Console.print(`구입 금액: ${lottoPrice}`);
    Console.print(`당첨 번호: ${lotto.getNumbers()}`);
    Console.print(`보너스 번호: ${bonusNumber}`);
  }
}

export default App;
