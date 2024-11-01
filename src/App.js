import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 1에서 45 사이의 중복되지 않은 정수 6개 반환
    const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    console.log(lotto);
  }
}

export default App;
