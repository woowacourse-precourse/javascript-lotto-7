import { MissionUtils } from "@woowacourse/mission-utils";

const { Console } = MissionUtils;
const { Random } = MissionUtils;

function isPaymentValid(input) {
  if (isNaN(input)) {
    Console.print("[ERROR] 금액은 숫자여야 합니다.");
    return false;
  } else if (input % 1000 != 0) {
    Console.print("[ERROR] 금액을 1000원 단위로 입력해주세요.");
    return false;
  }
  return true;
}

class App {
  async run() {}
}

export default App;
