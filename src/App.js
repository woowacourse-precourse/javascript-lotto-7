import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    const LOTTO_WIN_NUM = [1, 2, 3, 4, 5, 6];
    const lottoResult = new Lotto(LOTTO_WIN_NUM); // 변수 이름을 lottoResult로 변경
    // 비동기 함수 호출 후 결과를 출력
    const lottoCount = await lottoResult.InputCost();
    Console.print(`구입 가능한 로또 개수: ${lottoCount}`);
  }
}

export default App;
