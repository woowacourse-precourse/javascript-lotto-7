import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 1에서 45 사이의 중복되지 않은 정수 6개 반환
    const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    console.log(lotto);

    const input = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n')
    const parseInput = parseInt(input, 10);
  }
}

export default App;
