import { MissionUtils } from "@woowacourse/mission-utils";

const { Console } = MissionUtils;
const { Random } = MissionUtils;

function isNumber(input) {
  if (isNaN(input)) {
    throw new Error("[ERROR] 숫자를 입력하세요.");
  }
}

function isValidPaymentUnit(input) {
  if (input % 1000 !== 0) {
    throw new Error("[ERROR] 금액을 1000원 단위로 입력해주세요.");
  }
}

function validatePayment(input) {
  isNumber(input);
  isValidPaymentUnit(input);
}

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
  async run() {
    let payment;
    do {
      payment = Number(
        await Console.readLineAsync("구입금액을 입력해 주세요.\n")
      );
    } while (!isPaymentValid(payment));
  }
}

export default App;
